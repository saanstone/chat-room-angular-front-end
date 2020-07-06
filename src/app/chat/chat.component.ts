import { Component, OnInit } from '@angular/core';
import { ChatService } from '../message/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  newMessage: string;
  messageList:  string[] = [];

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('message ==> ', message, this.messageList);
        this.messageList.push(message);
      });
  }
}
