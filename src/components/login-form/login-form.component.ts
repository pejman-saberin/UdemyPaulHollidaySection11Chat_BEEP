import { Component, EventEmitter,Output } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Account} from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account={} as Account;
  @Output() loginStatus: EventEmitter <LoginResponse>;



  constructor(private navCtrl:NavController,private auth: AuthService) {
    this.loginStatus=new EventEmitter<LoginResponse>();
  }

  async login(){
    const LoginResponse=await this.auth.signWithEmailandPassword(this.account);
    this.loginStatus.emit(LoginResponse);
    /*
    try{
      const result: LoginResponse={
        result:await  this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
    }
    catch(e){
      console.error(e);
      const error: LoginResponse={
        error:e
      }
      this.loginStatus.emit(error);
    }*/
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
