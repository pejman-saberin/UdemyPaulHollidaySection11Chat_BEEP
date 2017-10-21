import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from '../../models/profile/profile.interface';
import {Message} from '../../models/messages/message.interface';
import {MESSAGE_LIST} from '../../mocks/messages/messages';
import {AuthService} from "../../providers/auth.service";
import {DataService} from "../../providers/data.service";
import {ChatService} from "../../providers/chat.service";


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile:Profile;
  userId: string;
  userProfile: Profile;
  messageList:Message[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthService, private data: DataService, private chat: ChatService ) {
    //this.messageList=MESSAGE_LIST;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  ionViewWillLoad(){
    this.selectedProfile=this.navParams.get('profile');
    //this.auth.getAuthenticatedUser().subscribe(auth=>this.userId=auth.uid);
    this.data.getAuthenticatedUserProfile()
    .subscribe(profile=> {
      this.userProfile=profile;
      this.userId=profile.$key;
    });
  }

  async sendMessage(content:string){
    try{
      const message:Message={
        userToId:this.selectedProfile.$key,
        userToprofile:{
            firstName:this.selectedProfile.firstName,
            lastName:this.selectedProfile.lastName,
        },
        userFromProfile:{
          firstName:this.userProfile.firstName,
          lastName:this.userProfile.lastName,
        },
        userFromId:this.userId,
        content: content
      }

      await this.chat.sendChat(message);
      console.log(message);
    }
    catch(e){
      console.error(e);
    }
  }

}
