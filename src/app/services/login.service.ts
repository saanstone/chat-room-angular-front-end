import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post<any>(`${environment.AUTHORIZATION_ENDPOINT}/login`, user).pipe(
      map(res => res),
      catchError(err => throwError(err))
    )
  }

}
