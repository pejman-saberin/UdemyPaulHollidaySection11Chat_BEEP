import {Injectable} from "@angular/core";
import { AngularFireDatabase,FirebaseListObservable} from "angularfire2/database-deprecated";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first' ;

import {Channel} from "../models/channel/channel.interface";
import {ChannelMessage} from "../models/channel/channel-message.interface";
import {Message} from "../models/messages/message.interface";
import {AuthService} from "./auth.service";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ChatService{

  constructor(private database: AngularFireDatabase, private auth:AuthService){

  }

  addChannel(channelName:string){
    this.database.list(`channel-names`).push({name:channelName});


    /*this is how a channel is in the database
    -were223: //this is a key for example
    name:'Ionic'
    -gergr4:
    name:'Angular'

    channels/Angular/messages

    */
  }

  getChannelListRef(): FirebaseListObservable <Channel[]>{
    return this.database.list(`channel-names`);
  }

  getChannelChatRef(channelKey: string) {
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
    await this.database.list(`/channels/${channelKey}`).push(message);
  }

  async sendChat(message:Message){
    await this.database.list('/messages').push(message);
  }

  getChats(userTwoId: string){
    return this.auth.getAuthenticatedUser()
      .map(auth=>auth.uid)  //auth is the result of getAuthenticatedUser. Then we map auth to auth.uid becasuse we are only interested in the uid
      .mergeMap(uid=> this.database.list(`/user-messages/${uid}/${userTwoId}`))//then here we grab the message from the user-messages from that uid
      .mergeMap(chats=>{
        return Observable.forkJoin(  //Need to search forkJoin and study more about rxjs
          chats.map(chat=>this.database.object(`/messages/${chat.$key}`)
          .first()),
          (...vals: Message[])=>{
            console.log(vals);
            return vals     //Observable.of(vals);
          }
        )
      })//we want to take the results of  /user-messages list from above and get messages from messages using that id
  }



}
