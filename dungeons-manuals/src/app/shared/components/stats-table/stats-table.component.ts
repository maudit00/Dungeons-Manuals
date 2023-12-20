import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrl: './stats-table.component.scss'
})
export class StatsTableComponent {
  @Input() character!:any;

  str!:number;
  dex!:number;
  con!:number;
  int!:number;
  wis!:number;
  cha!:number;
  modStr!:number;
  modDex!:number;
  modCon!:number;
  modInt!:number;
  modWis!:number;
  modCha!:number;

  ngOnInit(){
    this.str=this.character.strength
    this.dex=this.character.dexterity
    this.con=this.character.constitution
    this.int=this.character.intelligence
    this.wis=this.character.wisdom
    this.cha=this.character.charisma

    this.modStr=Math.floor((this.str-10)/2)
    this.modDex=Math.floor((this.dex-10)/2)
    this.modCon=Math.floor((this.con-10)/2)
    this.modInt=Math.floor((this.int-10)/2)
    this.modWis=Math.floor((this.wis-10)/2)
    this.modCha=Math.floor((this.cha-10)/2)
  }
}
