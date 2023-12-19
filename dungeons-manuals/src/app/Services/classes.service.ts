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

  constructor(private http: HttpClient) { }


  classUrl: string = `${environment.api_url}/api/classes/`
  subClassUrl: string = `${environment.api_url}/api/subclasses/`

  getSpecificClass(index: string): Observable<IClass> {
    return this.http.get<IClass>(`${this.classUrl}${index}`)
  }

  getSpecificSubClass(index: string): Observable<IClass> {
    return this.http.get<IClass>(`${this.subClassUrl}${index}`)
  }

  getClasses(): Observable<iResClasses> {
    return this.http.get<iResClasses>(`${this.classUrl}`)
  }

  getSubClasses(): Observable<iResClasses> {
    return this.http.get<iResClasses>(`${this.subClassUrl}`)
  }

  getImgByIndex(index: string): string {
    switch (index) {
      case 'barbarian':
        return '../../../assets/img/';
      case 'bard':
        return '../../../assets/img/';
      case 'cleric':
        return '../../../assets/img/';
      case 'druid':
        return '../../../assets/img/';
      case 'fighter':
        return '../../../assets/img/';
      case 'monk':
        return '../../../assets/img/';
      case 'paladin':
        return '../../../assets/img/';
      case 'ranger':
        return '../../../assets/img/';
      case 'rogue':
        return '../../../assets/img/';
      case 'sorcerer':
        return '../../../assets/img/';
      case 'warlock':
        return '../../../assets/img/';
      case 'wizard':
        return '../../../assets/img/';
      case 'berserker':
        return '../../../assets/img/';
      case 'champion':
        return '../../../assets/img/';
      case 'devotion':
        return '../../../assets/img/';
      case 'draconic':
        return '../../../assets/img/';
      case 'evocation':
        return '../../../assets/img/';
      case 'fiend':
        return '../../../assets/img/';
      case 'hunter':
        return '../../../assets/img/';
      case 'land':
        return '../../../assets/img/';
      case 'life':
        return '../../../assets/img/';
      case 'lore':
        return '../../../assets/img/';
      case 'open-hand':
        return '../../../assets/img/';
      case 'thief':
        return '../../../assets/img/';
      default:
        return 'https://picsum.photos/300/300?random=1';
    }
  }
}
