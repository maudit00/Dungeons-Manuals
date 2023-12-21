import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellService } from '../../../Services/spell.service';
import { ISpell } from '../../../Models/i-spell';

@Component({
  selector: 'app-spell-detail-component',
  templateUrl: './spell-detail-component.html',
  styleUrl: './spell-detail-component.scss'
})
export class SpellDetailComponent {

  spell!:ISpell

  constructor(
    private url: ActivatedRoute,
    private SSVC:SpellService
  ){}

  ngOnInit(){
    this.url.params.subscribe(params=>
      this.SSVC.getSpell(params['index']).subscribe(data=>this.spell=data))
  }
}
