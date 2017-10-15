import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

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

  text: string;

  constructor(private navCtrl:NavController) {
    console.log('Hello RegisterFormComponent Component');
    this.text = 'Hello World';
  }

  navigateToPage(pageName:string){
    this.navCtrl.push(pageName);
  }

  register(){
    
  }


}
