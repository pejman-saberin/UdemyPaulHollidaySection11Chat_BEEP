import {Message} from '../../models/messages/message.interface';
import {USER_LIST} from "../users/users";

const userList=USER_LIST;
const messageList:Message[]=[];

userList.forEach((user)=>{
  messageList.push({user:user, date:new Date(), lastMessage:'hello'})
});

/*const messageList: Message[]=[
  {user:USER_LIST[0], date: new Date()},
  {user:USER_LIST[1], date: new Date()},
  {user:USER_LIST[2], date: new Date()},
  {user:USER_LIST[3], date: new Date()},
]*/


export const MESSAGE_LIST=messageList;
