import { IClass } from './../Models/i-class';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRef } from '../Models/i-ref';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }

  classes:IClass[] = [];

  genericUrl:string = environment.api_url

  getClasses():Observable<IRef[]> {
    return this.http.get<IRef[]>(`${this.genericUrl}/classes`)
  }
}
