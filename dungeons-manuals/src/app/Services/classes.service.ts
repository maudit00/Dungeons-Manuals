import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IClass, iResClasses } from '../Models/i-class';
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
        return '../../assets/img/barbarian.jpeg';
      case 'bard':
        return '../../assets/img/bard.jpeg';
      case 'cleric':
        return '../../assets/img/cleric.jpeg';
      case 'druid':
        return '../../assets/img/druid.jpeg';
      case 'fighter':
        return '../../assets/img/fighter.jpeg';
      case 'monk':
        return '../../assets/img/monk.jpeg';
      case 'paladin':
        return '../../assets/img/paladin.jpeg';
      case 'ranger':
        return '../../assets/img/ranger.jpeg';
      case 'rogue':
        return '../../assets/img/rogue.jpeg';
      case 'sorcerer':
        return '../../assets/img/sorcerer.jpeg';
      case 'warlock':
        return '../../assets/img/warlock.jpeg';
      case 'wizard':
        return '../../assets/img/wizard.jpeg';
      case 'berserker':
        return '../../assets/img/berserker.jpeg';
      case 'champion':
        return '../../assets/img/champion.jpeg';
      case 'devotion':
        return '../../assets/img/devotion.jpeg';
      case 'draconic':
        return '../../assets/img/draconic.jpeg';
      case 'evocation':
        return '../../assets/img/evocation.jpeg';
      case 'fiend':
        return '../../assets/img/fiend.jpeg';
      case 'hunter':
        return '../../assets/img/hunter.jpeg';
      case 'land':
        return '../../assets/img/land.jpeg';
      case 'life':
        return '../../assets/img/life.jpeg';
      case 'lore':
        return '../../assets/img/lore.jpeg';
      case 'open-hand':
        return '../../assets/img/open-hand.jpeg';
      case 'thief':
        return '../../assets/img/thief.jpeg';
      default:
        return 'https://picsum.photos/300/300?random=1';
    }
  }
}
