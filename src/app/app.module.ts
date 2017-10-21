import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
//import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {FormsModule} from "@angular/forms";

//import { InboxPage } from '../pages/inbox/inbox';  //since we are not doing lazy loading it has to be imported in the app module
import {FIREBASE_CONFIG} from './app.firebase.config';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';
import {ChatService} from "../providers/chat.service";

@NgModule({
  declarations: [
    MyApp,
    //LoginPage,//doing lazy loading
    //InboxPage doing lazy loading
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //LoginPage,//doing lazy loading
  //  InboxPage//doing lazy loading
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    ChatService
  ]
})
export class AppModule {}
