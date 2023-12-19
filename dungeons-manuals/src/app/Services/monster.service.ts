import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IRes } from '../Models/i-ref';
import { IMonster } from '../Models/i-monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsterURL:string=`${environment.api_url}/api/monsters`

  constructor(private http:HttpClient) { }

  getMonsters():Observable<IRes>{
    return this.http.get<IRes>(this.monsterURL)
  }

  getMonsterByIndex(index:string):Observable<IMonster>{
    return this.http.get<IMonster>(`${this.monsterURL}/${index}`);
  }
}
