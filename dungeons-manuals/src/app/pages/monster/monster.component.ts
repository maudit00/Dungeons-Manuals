import { Component } from '@angular/core';
import { IRef, IRes } from '../../Models/i-ref';
import { MonsterService } from '../../Services/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.scss'
})
export class MonsterComponent {

  monsterArray:IRef[]=[];

  constructor(private MSVC:MonsterService){}

  ngOnInit(){
    this.MSVC.getMonsters().subscribe(data=>this.monsterArray=data.results);
  }
}
