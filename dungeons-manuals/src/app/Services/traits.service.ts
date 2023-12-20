import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ITraits } from '../models/i-traits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitsService {

  constructor(private http:HttpClient) {}

  traitsUrl: string = `${environment.api_url}/api/traits`

  getTraits(): Observable<ITraits> {
    return this.http.get<ITraits>(`${this.traitsUrl}`)
  }
}
