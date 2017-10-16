import { Component, Output,EventEmitter } from '@angular/core';

import {Account} from '../../models/account/account.interface';
import {AuthService} from '../../providers/auth.service';
import {LoginResponse  } from '../../models/login/login-response.interface';


/**
* Generated class for the RegisterFormComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account={} as Account;  //when we use 'as' we are saying this account variable is of type acocunt

  @Output()registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService){
    this.registerStatus=new EventEmitter<LoginResponse>();
  }

  async Register(){
    try{
      const result= await
      this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
      /*this.toast.create({
        message:"Account succsefully created!",
        duration:3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');*/
    }
    catch(e){
      console.error(e);
      this.registerStatus.emit(e);
      /*
      console.error(e);
      this.toast.create({
        message:e.message,
        duration:3000
      }).present();*/
    }

  }


}
