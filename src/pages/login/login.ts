import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register"

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
    this.navCtrl.push(pageName);
  }

}
