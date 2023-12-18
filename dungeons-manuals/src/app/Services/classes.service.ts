import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IClass, iResClasses } from '../Models/i-class';
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
  classChosen:IRef= {
    index: '',
    name: '',
    url: ''
  }

  getSpecificClass (index:string):Observable<IClass>{
    return this.http.get<IClass>(`${this.genericUrl}${this.classUrl}${index}`)
  }

  getClasses():Observable<iResClasses> {
    return this.http.get<iResClasses>(`${this.genericUrl}${this.classUrl}`)
  }
}
