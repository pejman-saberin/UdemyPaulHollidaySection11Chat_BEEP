import { Component, EventEmitter,Output } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {Account} from '../../models/account/account.interface';
import {LoginReponse} from '../../models/login/login-response.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account={} as Account;
  @Output() loginStatus: EventEmitter <LoginReponse>;



  constructor(private navCtrl:NavController, private afAuth: AngularFireAuth) {
    this.loginStatus=new EventEmitter<LoginReponse>();
  }

  async login(){
    try{
      const result: LoginReponse={
        result:await  this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
    }
    catch(e){
      console.error(e);
      const error: LoginReponse={
        error:e
      }
      this.loginStatus.emit(error);
    }
  }
  /*
  navigateToPage(pageName:string){
    //this.navCtrl.push(pageName); We need to diable the back button because we don't want to go back to login from inbox
    pageName=== 'TabsPage' ?this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);
  }
  */
  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }
}
