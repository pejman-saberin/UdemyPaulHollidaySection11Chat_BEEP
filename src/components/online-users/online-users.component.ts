import { Component, OnInit } from '@angular/core';
import {DataService} from '../../providers/data.service';
import {Profile} from "../../models/profile/profile.interface";
import { AngularFireDatabase,FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>

  constructor(private  data: DataService,private database: AngularFireDatabase) {

  }
  ngOnInit(){
    this.setUserOnline()
    this.getOnlineUsers();
  }

  setUserOnline(){
    //Get the authenticated user
    this.data.getAuthenticatedUserProfile().subscribe(profile=>{
        //call to a service that sets the user online within Firebase
        this.data.setUserOnline(profile);
        console.log('we are inside online users');
      console.log(profile);
    })
  }


  getOnlineUsers() {
    this.userList= this.data.getOnlineUsers(); 
  }

}
