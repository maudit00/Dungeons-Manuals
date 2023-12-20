import { Levels } from './../Models/i-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IClass} from '../Models/i-class';
import { Observable } from 'rxjs';
import { IRef, IRes } from '../Models/i-ref';
import { ISubClass} from '../Models/i-sub-class';


@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }


  classUrl: string = `${environment.api_url}/api/classes/`
  subClassUrl: string = `${environment.api_url}/api/subclasses/`
  subClassLevelsUrl: string = `${environment.api_url}/api/subclasses/berserker/levels`

  getSpecificClass(index: string): Observable<IClass> {
    return this.http.get<IClass>(`${this.classUrl}${index}`)
  }

  getSpecificSubClass(index: string): Observable<ISubClass> {
    return this.http.get<ISubClass>(`${this.subClassUrl}${index}`)
  }

  getClasses(): Observable<IRes> {
    return this.http.get<IRes>(`${this.classUrl}`)
  }

  getSubClasses(): Observable<IRes> {
    return this.http.get<IRes>(`${this.subClassUrl}`)
  }

  getSubClassesLevels(index : string ):Observable<Levels>{
    return this.http.get<Levels>(`${this.subClassUrl}${index}/levels`)
  }

  getSubClassesFeatures(index : string):Observable<IRes>{
    return this.http.get<IRes>(`${this.subClassUrl}${index}/features`)
  }

}
