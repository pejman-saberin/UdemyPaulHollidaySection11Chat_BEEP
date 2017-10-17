import { Component , OnDestroy} from '@angular/core'; //OnDestroy is used for unsunscribe if we leave the page
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
  profile={} as Profile;
   

  constructor(private auth: AuthService, private data: DataService) {
    this.authenticatedUSer$=this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.authenticatedUSer=user;
    })
  }
  
  //everytime we deal with obserables we have to make sure we subscribe when we finish
  async saveProfile(){
    this.profile.email=this.authenticatedUSer.email;
    const result=await this.data.saveProfile(this.authenticatedUSer, this.profile);//this is the promise
    console.log(result);
  }
  
  ngOnDestroy():void {
    this.authenticatedUSer$.unsubscribe();
  }
  

}
