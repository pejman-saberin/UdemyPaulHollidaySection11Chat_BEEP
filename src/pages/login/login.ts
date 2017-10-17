import { Component } from '@angular/core';
import {IonicPage,NavController,ToastController} from 'ionic-angular';

import {LoginResponse} from '../../models/login/login-response.interface';
import {DataService} from "../../providers/data.service";
import {User} from 'firebase/app';

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

  constructor(private data:DataService, private navCtrl: NavController, private toast: ToastController) {
  }

  login(event: LoginResponse){
    console.log(event);
    if(!event.error){
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration:3000
      }).present();
      this.data.getProfile(<User>event.result).subscribe(profile=>{  //type casting <User>event.result
        console.log(profile);
        profile.val() ? this.navCtrl.setRoot('TabsPage'): this.navCtrl.setRoot('EditProfilePage');  //.val() comes from the preserveSnapshot that is a firebase method
      })
    }
    else{
      this.toast.create({
        message:event.error.message,
        duration:3000
      }).present();
    }

  }



}
