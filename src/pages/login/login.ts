import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register"
import{InboxPage} from "../inbox/inbox";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pageName:string){
    //this.navCtrl.push(pageName); We need to diable the back button because we don't want to go back to login from inbox
    pageName=== 'InboxPage' ?this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);
  }

}
