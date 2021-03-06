import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel.interface";
import {ChatService} from "../../providers/chat.service";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import {ChannelMessage} from "../../models/channel/channel-message.interface";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel:Channel;
  channelMessages: FirebaseListObservable <ChannelMessage[]>
  //channelMessages:Observable<Channel[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private chat: ChatService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelChatPage');

  }

  ionViewWillLoad(){
    this.channel=this.navParams.get('channel');
    console.log(this.channel);
    this.channelMessages=this.chat.getChannelChatRef(this.channel.$key);
  }

  sendMessage(content:string){
    let channelMessage:ChannelMessage={
      content
    }
    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
  }

}
