import { IAuthData } from './../models/auth/i-auth-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../models/auth/i-register';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl: string = `${environment.backendUrl}`

  constructor(private http:HttpClient) { }

  signUp(register:IRegister):Observable<IAuthData>{

    return this.http.post<IAuthData>(`${this.backendUrl}/register`, register)

  }

}
