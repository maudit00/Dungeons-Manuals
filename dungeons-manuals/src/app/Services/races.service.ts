import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IRes, IRef} from '../Models/i-ref';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http:HttpClient) { }
  racesUrl:string=`${environment.api_url}/api/races/`;
  subRacesUrl:string=`${environment.api_url}/api/subraces/`;


  getRaces(){
  return this.http.get<IRes>(`${this.racesUrl}`)
  }

}
