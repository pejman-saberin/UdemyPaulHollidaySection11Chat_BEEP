import {Profile} from '../../models/profile/profile.interface';

const userList:Profile[]=[
  {
    firstName:'Paul',
    lastName:'Holiday',
    email: 'paul@paul.com',
    avatar: 'assets/img/avatar.png',
    dataOfBirth: new Date()
  },
  {
    firstName:'John',
    lastName:'Doe',
    email: 'John@Doe.com',
    avatar: 'assets/img/avatar.png',
    dataOfBirth: new Date()
  },
  {
    firstName:'Sarah',
    lastName:'Smith',
    email: 'Sarah@Smith.com',
    avatar: 'assets/img/avatar.png',
    dataOfBirth: new Date()
  },
  {
    firstName:'Roger',
    lastName:'Raynold',
    email: 'Roger@Raynold.com',
    avatar: 'assets/img/avatar.png',
    dataOfBirth: new Date()
  },
];


export const USER_LIST=userList;
