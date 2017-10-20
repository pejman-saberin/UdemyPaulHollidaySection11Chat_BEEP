import { Component, OnInit,Output, EventEmitter} from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  @Output() SendMessage: EventEmitter<string>
  content: string;

  text: string;

  constructor() {
    console.log('Hello SendMessageBoxComponent Component');
    this.text = 'Hello World';
    this.SendMessage=new EventEmitter<string>();
  }

  send(){
    this.SendMessage.emit(this.content);
    this.content="";
  }

}
