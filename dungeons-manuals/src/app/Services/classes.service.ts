import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IClass} from '../Models/i-class';
import { Observable } from 'rxjs';
import { IRes } from '../Models/i-ref';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }


  classUrl: string = `${environment.api_url}/api/classes/`
  subClassUrl: string = `${environment.api_url}/api/subclasses/`

  getSpecificClass(index: string): Observable<IClass> {
    return this.http.get<IClass>(`${this.classUrl}${index}`)
  }

  getSpecificSubClass(index: string): Observable<IClass> {
    return this.http.get<IClass>(`${this.subClassUrl}${index}`)
  }

  getClasses(): Observable<IRes> {
    return this.http.get<IRes>(`${this.classUrl}`)
  }

  getSubClasses(): Observable<IRes> {
    return this.http.get<IRes>(`${this.subClassUrl}`)
  }


}
