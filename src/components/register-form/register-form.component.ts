import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastController,NavController} from 'ionic-angular';

import {Account} from '../../models/account/account.interface';



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

  constructor(private afAuth:AngularFireAuth,
              private toast:ToastController,
              private navCtrl:NavController) {  }


  async Register(){
    try{
      const result= await
      this.afAuth.auth.createUserWithEmailAndPassword(this.account.email,this.account.password);
      this.toast.create({
        message:"Account succsefully created!",
        duration:3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');
    }
    catch(e){
      console.error(e);
      this.toast.create({
        message:e.message,
        duration:3000
      }).present();
    }

  }


}
