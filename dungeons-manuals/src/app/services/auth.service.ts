import { IAuthData } from './../models/auth/i-auth-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../models/auth/i-register';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl: string = `${environment.backendUrl}`
  authSubject = new BehaviorSubject<IAuthData | null>(null)
  user$: Observable<IAuthData | null> = this.authSubject.asObservable();

  constructor(private http:HttpClient) { }

  signUp(register:IRegister):Observable<IAuthData>{

    return this.http.post<IAuthData>(`${this.backendUrl}/register`, register)

  }

  logIn(logInData:IAuthData):Observable<IAuthData>{

    return this.http.post<IAuthData>(`${this.backendUrl}/login`, logInData)
    .pipe(tap(data =>{

      this.authSubject.next(data);
      localStorage.setItem('accessData', JSON.stringify(data));

    }))

  }

}
