import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ISpellRes } from '../Models/i-ref';
import { ISpell } from '../models/i-spell';

@Injectable({
  providedIn: 'root'
})

export class SpellService {

  URL:string=`${environment.backendUrl}/spells`;
  spellURL:string=`${environment.api_url}/api/spells`

  constructor(
    private http: HttpClient,
  ) { }

  getAllSpells():Observable<ISpellRes[]>{
    return this.http.get<ISpellRes[]>(this.URL);
  }

  getSpell(spellIndex:string):Observable<ISpell>{
    return this.http.get<ISpell>(`${this.spellURL}/${spellIndex}`);
  }
}
