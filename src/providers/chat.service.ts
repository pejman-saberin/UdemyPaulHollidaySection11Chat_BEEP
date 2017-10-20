import {Injectable} from "@angular/core";
import { AngularFireDatabase,FirebaseListObservable} from "angularfire2/database-deprecated";
import {Channel} from "../models/channel/channel.interface";

@Injectable()
export class ChatService{

  constructor(private database: AngularFireDatabase){

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

  getChannelListRef(): FirebaseListObservable <Channel>{    
    return this.database.list(`channel-names`);
  }



}
