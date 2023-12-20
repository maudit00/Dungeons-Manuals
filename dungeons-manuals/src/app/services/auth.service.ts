import { IAuthData } from './../models/auth/i-auth-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../models/auth/i-register';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ILogin } from '../models/auth/i-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl: string = `${environment.backendUrl}`

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<IAuthData | null>(null)
  user$: Observable<IAuthData | null> = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http:HttpClient, private router:Router) {

    this.restorUser()
   }

  signUp(register:IRegister):Observable<IAuthData>{

    return this.http.post<IAuthData>(`${this.backendUrl}/register`, register)

  }

  logIn(logInData:ILogin):Observable<IAuthData>{

    return this.http.post<IAuthData>(`${this.backendUrl}/login`, logInData)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('accessData', JSON.stringify(data));
      this.autoLogout(data.accessToken)
    }))

  }

  autoLogout(jwt:string){
    const expDate =this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime()


  setTimeout(()=> {
    this.logout()
  }, expMs)
  }


  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  restorUser(){
    const userJson:string|null = localStorage.getItem('accessData');
    if(!userJson) return;

    const accessData:IAuthData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return

    this.autoLogout(accessData.accessToken)
    this.authSubject.next(accessData)
  }
}
