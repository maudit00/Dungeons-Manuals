import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IRes, IRef} from '../Models/i-ref';
import { IRace } from '../Models/i-race';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http:HttpClient) { }
  racesUrl:string=`${environment.api_url}/api/races/`;
  subRacesUrl:string=`${environment.api_url}/api/subraces/`;


  getRaces():Observable<IRes>{
  return this.http.get<IRes>(`${this.racesUrl}`)
  }

  getSpecificRace(index:string):Observable<IRace>{
	return this.http.get<IRace>(`${this.racesUrl}${index}`)

}
}
