import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {environment} from 'src/environments/environment';


// import { SocketioService } from './socketio.service'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

const config: SocketIoConfig = { url: environment.SOCKET_ENDPOINT, options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
