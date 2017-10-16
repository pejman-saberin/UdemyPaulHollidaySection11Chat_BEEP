import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
//import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { InboxPage } from '../pages/inbox/inbox';  //since we are not doing lazy loading it has to be imported in the app module
import {FIREBASE_CONFIG} from './app.firebase.config';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';

@NgModule({
  declarations: [
    MyApp,
    //LoginPage,//doing lazy loading
    InboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //LoginPage,//doing lazy loading
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
     DataService
  ]
})
export class AppModule {}
