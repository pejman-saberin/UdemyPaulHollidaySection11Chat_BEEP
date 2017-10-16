import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface"

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast:ToastController,
     ) {
  }

  register(event:LoginResponse){
    console.log(event);
    if (!event.error){
      this.toast.create({
          message: `Acccont created: ${event.result.email}`,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
            message: `Acccont not created: ${event.error.message}`,
            duration: 3000
          }).present();

      }
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
