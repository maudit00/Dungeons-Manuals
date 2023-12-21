import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRef, IRes } from '../Models/i-ref';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
featuresUrl:string = `${environment.api_url}/api/features`;
  constructor(private http:HttpClient) { }


  getFeatures(): Observable<IRes> {
    return this.http.get<IRes>(`${this.featuresUrl}`)
  }
}
