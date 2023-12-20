import { Component } from '@angular/core';
import { ISpellRes } from '../../Models/i-ref';
import { SpellService } from '../../Services/spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})
export class SpellsComponent {
  spellsArray!: ISpellRes[];
  level0!: ISpellRes[];
  level1!: ISpellRes[];
  level2!: ISpellRes[];
  level3!: ISpellRes[];
  level4!: ISpellRes[];
  level5!: ISpellRes[];
  level6!: ISpellRes[];
  level7!: ISpellRes[];
  level8!: ISpellRes[];
  level9!: ISpellRes[];

  constructor(
    private SSVC:SpellService,
  ){}

  ngOnInit(){
    this.SSVC.getAllSpells().subscribe(data=>{
      this.spellsArray = data;
      this.level0=data.filter(spell=>spell.level==0);
      this.level1=data.filter(spell=>spell.level==1);
      this.level2=data.filter(spell=>spell.level==2);
      this.level3=data.filter(spell=>spell.level==3);
      this.level4=data.filter(spell=>spell.level==4);
      this.level5=data.filter(spell=>spell.level==5);
      this.level6=data.filter(spell=>spell.level==6);
      this.level7=data.filter(spell=>spell.level==7);
      this.level8=data.filter(spell=>spell.level==8);
      this.level9=data.filter(spell=>spell.level==9);
    });
  }
}
