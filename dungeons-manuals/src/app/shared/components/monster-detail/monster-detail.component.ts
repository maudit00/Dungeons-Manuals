import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../../../Services/monster.service';
import { IMonster } from '../../../Models/i-monster';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrl: './monster-detail.component.scss'
})
export class MonsterDetailComponent {
  constructor(
    private viewportScroller: ViewportScroller,
    private monstersSvc: MonsterService,
    private active: ActivatedRoute
  ) { }


  monsterChosen: string = ''
  monsterDetails: IMonster = {
    index: '',
    name: '',
    size: '',
    type: '',
    alignment: '',
    armor_class: [],
    hit_points: 0,
    hit_dice: '',
    hit_points_roll: '',
    speed: {
      walk: '',
      swim: '',
      fly: ''
    },
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: {
      darkvision: '',
      blindsight: ''
    },
    languages: '',
    challenge_rating: 0,
    proficiency_bonus: 0,
    xp: 0,
    special_abilities: [],
    actions: [],
    legendary_actions: [],
    image: '',
    url: ''
  };

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0])
    console.log(this.viewportScroller.scrollToPosition([0, 0]))
    this.active.params.subscribe(params => {
      this.monstersSvc.getMonsterByIndex(params['index']).subscribe(monster => {
        this.monsterDetails = monster
      })
    })
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  scrollToTop() :void {
    window.scrollTo(0, 0)
  }

}
