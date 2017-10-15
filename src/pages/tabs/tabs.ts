import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import {InboxPage} from "../inbox/inbox";

/**
This is the page we enter after the login
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 tab1Root: any;
 tab2Root:string;
 tab3Root:string;

 constructor(){
   this.tab1Root= InboxPage; //alternative way of loading the page . This needs an import
   this.tab2Root='ChannelsPage';// when using lazy loading like this by passing things as strings the performance of our application increases. Becuase the channels gets loaded when the user asks for it
   this.tab3Root='ProfilePage';

 }
}
