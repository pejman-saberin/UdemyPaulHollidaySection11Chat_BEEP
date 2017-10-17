import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResult(event: Boolean){
    console.log("we are inside the page component and below you see the value of the event");
    console.log(event);
    event? this.navCtrl.setRoot('TabsPage'): console.log("Not authenticated or saved");   //this event is emiited from the child component in the component folder for redirection. if profile is saved, we are redirecting
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
