import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../../../Services/monster.service';
import { IMonster } from '../../../Models/i-monster';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrl: './monster-detail.component.scss'
})
export class MonsterDetailComponent {
  constructor(
    private url: ActivatedRoute,
    private monstersSvc: MonsterService,
    private active: ActivatedRoute
  ) { }

  monsterChosen: string = ''
  monsterDetails!: IMonster;

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.monstersSvc.getMonsterByIndex(params['index']).subscribe(monster => {
        this.monsterDetails = monster
      })
    })
  }
}
