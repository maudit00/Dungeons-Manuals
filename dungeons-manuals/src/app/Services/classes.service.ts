import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IClass } from '../Models/i-class';
import { IRef } from '../Models/i-ref';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }


  genericUrl:string = environment.api_url
  classUrl:string = "/api/classes/"
  classes:IClass[] = [];

  getSpecificClass (classe:IRef):Observable<IClass>{
    return this.http.get<IClass>(this.genericUrl+this.classUrl+classe.name)
  }

  getClasses():Observable<IRef[]> {
    return this.http.get<IRef[]>(`${this.genericUrl}/classes`)
  }
}
