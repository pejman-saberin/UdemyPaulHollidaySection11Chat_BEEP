import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  constructor(private navCtrl:NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  navigateToPage(pageName:string){
    //this.navCtrl.push(pageName); We need to diable the back button because we don't want to go back to login from inbox
    pageName=== 'TabsPage' ?this.navCtrl.setRoot(pageName) :this.navCtrl.push(pageName);
  }

}
