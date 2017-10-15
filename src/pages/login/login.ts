import { Component } from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController) {
  }

  navigateToPage(pageName:string){
    //this.navCtrl.push(pageName); We need to diable the back button because we don't want to go back to login from inbox
    pageName=== 'TabsPage' ?this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);
  }

}
