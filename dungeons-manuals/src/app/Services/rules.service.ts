import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRules } from '../Models/i-rules';
import { IRef } from '../Models/i-ref';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  rulesUrl = `${environment.api_url}/api/rules`

  constructor(private http:HttpClient) { }

  getRules():Observable<IRef[]>{
    return this.http.get<IRef[]>(this.rulesUrl)
  }

  getRulesByIndex(index:string):Observable<IRef>{
    return this.http.get<IRef>(`${this.rulesUrl}/${index}`);
  }
}
