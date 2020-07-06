import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from './message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) { }

  public sendMessage(message) {
    this.socket.emit('from browser', JSON.stringify({message}));
}
public getMessages = () => {
  return Observable.create((observer) => {
          this.socket.on('reply from server', (message) => {
              observer.next(message);
          });
  });
}
}