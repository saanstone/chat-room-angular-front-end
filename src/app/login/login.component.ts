import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email : new FormControl('')
  });

  constructor(
    private router : Router,
    private loginService : LoginService,
    private cookieService : CookieService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let emailPattern = /\S+@\S+\.\S+/;
    if(this.loginForm.value.firstName && this.loginForm.value.lastName &&  emailPattern.test(this.loginForm.value.email)){
      console.warn(this.loginForm.value);
      this.loginService.login(this.loginForm.value)
      .subscribe(res => {
        console.log('res ==> ', res);
        if (res.user.auth) {
          this.cookieService.set('token', res.user.token);
          this.router.navigate(['']);
        }
      }, err => {
        this.cookieService.delete('token');
      }
      );
    }
  }

}
