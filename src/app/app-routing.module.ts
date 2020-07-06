import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from "./chat/chat.component";
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path : "login",
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : "",
    component : ChatComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
