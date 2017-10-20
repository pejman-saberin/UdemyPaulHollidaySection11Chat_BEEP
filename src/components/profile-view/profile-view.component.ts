import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {LoadingController, Loading} from 'ionic-angular';
import {User} from 'firebase/app';

import {AuthService} from '../../providers/auth.service';
import {DataService} from "../../providers/data.service";
import {Profile} from "../../models/profile/profile.interface";

@Component({
    selector: 'app-profile-view',
    templateUrl:'profile-view.component.html'

})
export class ProfileViewComponent implements OnInit{

    private authUser:User;

    public userProfile: Profile;  //this should be public because it will get accessed inside of the view of this component

    private loader: Loading;

    @Output () existingProfile: EventEmitter<Profile>;

    ngOnInit():void{
        this.loader.present();
        this.auth.getAuthenticatedUser().subscribe((user: User)=>{
           this.data.getProfile(user).subscribe(profile=>{
            this.userProfile=<Profile>profile.val(); //get the value of the user profile
            this.existingProfile.emit(this.userProfile); //emit the userProfile to the user profile page. You call withing profile page by calling existingProfile
               this.userProfile=<Profile>profile.val();
               this.loader.dismiss();
           })
        })

    }
    constructor(private data:DataService, private auth: AuthService, private loading: LoadingController){
        this.existingProfile=new EventEmitter<Profile>();  //this EventEmitter can emit the user profile when the profile appears on ngOnInit function   this.userProfile=<Profile>profile.val();
        this.loader=this.loading.create({
            content: 'Loading Profile...'
        });

    }

}
