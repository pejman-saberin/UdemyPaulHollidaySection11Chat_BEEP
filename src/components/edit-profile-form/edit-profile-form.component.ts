import { Component , OnDestroy, Output, EventEmitter} from '@angular/core'; //OnDestroy is used for unsunscribe if we leave the page
import {Subscription} from 'rxjs/Subscription'; //everytime we deal with obserables we have to make sure we subscribe when we finish
import {User} from 'firebase/app';

import {Profile} from '../../models/profile/profile.interface';
import {DataService} from '../../providers/data.service';
import {AuthService} from '../../providers/auth.service';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUSer$: Subscription;  //$ is simply a naming convention to anything that is obervable.
  private authenticatedUSer: User; //this is what we get back from authenticated user

  //https://www.youtube.com/watch?v=3ke5c6nzVC0 (Angular 2 Tutorial (2016) - Inputs & Outputs)
 //input used to pass data from parent and child, output used to pass data from chuld to parent. To pass data between pages you use navparams
 //Passing data from child to parent using Output and evenemtters is how you create custom events
  @Output () saveProfileResult:EventEmitter<Boolean>;
  profile={} as Profile;


  constructor(private auth: AuthService, private data: DataService) {
    this.saveProfileResult=new EventEmitter<Boolean>();
    this.authenticatedUSer$=this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.authenticatedUSer=user;
    })
  }

  //everytime we deal with obserables we have to make sure we subscribe when we finish
  async saveProfile(){
    this.profile.email=this.authenticatedUSer.email;
    const result=await this.data.saveProfile(this.authenticatedUSer, this.profile);//this is the promise
    this.saveProfileResult.emit(result); //he was trying to show eventemitters, but alternatively we could reroute the user here
    console.log(result);
  }

  ngOnDestroy():void {
    this.authenticatedUSer$.unsubscribe();
  }


}
