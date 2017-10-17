import { Component, OnInit} from '@angular/core';
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
    
    userProfile: Profile;
    
    loader: Loading;
    
    ngOnInit():void{
        this.loader.present();
        this.auth.getAuthenticatedUser().subscribe((user: User)=>{
           this.data.getProfile(user).subscribe(profile=>{
               this.userProfile=<Profile>profile.val();
               this.loader.dismiss();
           }) 
        })
        
    }
    constructor(private data:DataService, private auth: AuthService, private loading: LoadingController){
        this.loader=this.loading.create({
            content: 'Loading Profile...'
        });
        
    }
    
}