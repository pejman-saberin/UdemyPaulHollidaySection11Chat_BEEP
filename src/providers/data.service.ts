import { Injectable } from '@angular/core';
//import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
//import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseObjectObservable,AngularFireDatabase,FirebaseListObservable } from "angularfire2/database-deprecated";
import {User} from 'firebase/app';
import {Profile} from  '../models/profile/profile.interface';
import "rxjs/add/operator/take";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mergeMap";
import {AuthService} from "./auth.service"
import { Observable } from 'rxjs/Observable';
import {database} from 'firebase';




//get and save data from different nodes in the database

@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable <Profile>

  constructor(private database: AngularFireDatabase, private authService:AuthService) {
    console.log('Hello DataProvider Provider');
  }

  searchUser(firstName:string){
    const query=this.database.list('/profile',{ //anything that user puts in as firstName, will get queries as firstName
      query:{
        orderByChild: 'firstName',
        equalTo:firstName
      }
    })

    return query.take(1);// it will return the first one. If you want all you just pass in the observable itself
  }

  getProfile(user:User){
    this.profileObject=this.database.object(`/profile/${user.uid}`,{preserveSnapshot:true});  //preserveSnapshot is a firebase method that provides us with the data
    return this.profileObject.take(1);
  }

  async saveProfile(user: User,profile: Profile)  //user is the authenticated user and profile is the profile of the user that we are sending to the database. We use this to save in the database
  {
      this.profileObject=this.database.object(`/profile/${user.uid}`);  //the format that we are saving the data in the database
    try{
      await this.profileObject.set(profile);
      return true;
    }
    catch (e){
      console.error(e);
      return false;
    }
  }

  //This is for video 152 that I am implementing now in video 156 since the method get getAuthenticatedUserProfile is being user.  is wasn't working when I tried in vdeo 152
  getAuthenticatedUserProfile(){
    return this.authService.getAuthenticatedUser().map(user=> user.uid)
    .mergeMap(authId=>this.database.object(`/profile/${authId}`)) //this returns authenticated user profile for that person  //Combining Observables with mergeMap. it is just a shoterway to get the authenticated userprofile
    .take(1)
  }


  setUserOnline(profile: Profile){
    const ref=database().ref(`online-users/${profile.$key}`)

    try{
      ref.update({...profile});  //spread operator is ...
      ref.onDisconnect().remove();
    }
    catch(e)
    {
      console.error(e);
    }

  }

  getOnlineUsers(): FirebaseListObservable<Profile[]>{
    console.log('inside of the data.service in getonlineUsers');
    console.log(this.database.list (`online-users`));
    return this.database.list (`online-users`);
  }
}
