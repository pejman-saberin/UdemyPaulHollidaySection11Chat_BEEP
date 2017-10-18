import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';


//import { LoginPage } from '../pages/login/login';//doing lazy loading



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:string = 'LoginPage';  //doing lazy loading
  rootPage:string;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    this.auth.getAuthenticatedUser().subscribe(auth=>{//if the user is already logged in, send them to the tabs page, this will work if the user closes their browsers as well.
      !auth?
        this.rootPage='LoginPage':
        this.rootPage='TabsPage';

    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
