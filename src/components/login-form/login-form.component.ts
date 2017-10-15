import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {Account} from '../../models/account/account.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account={} as Account;

  text: string;

  constructor(private navCtrl:NavController, private afAuth: AngularFireAuth) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  async login(){
    try{
      const result=await  this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

  navigateToPage(pageName:string){
    //this.navCtrl.push(pageName); We need to diable the back button because we don't want to go back to login from inbox
    pageName=== 'TabsPage' ?this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);
  }

}
