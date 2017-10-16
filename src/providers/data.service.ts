import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {User} from 'firebase/app';
import {} from  '../models/profile/profile.interface'

//get and save data from different nodes in the database

@Injectable()
export class DataService {
  
  profileObject: FirebaseObjectObservable <Profile>

  constructor(private database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
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

}
