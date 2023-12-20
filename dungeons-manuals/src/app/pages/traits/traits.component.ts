import { Component } from '@angular/core';
import { IResult } from '../../models/i-traits';
import { TraitsService } from '../../services/traits.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrl: './traits.component.scss'
})
export class TraitsComponent {

  traits:IResult[]=[]

  constructor( private traitsSvc:TraitsService){}

  ngOnInit(){
    this.traitsSvc.getTraits().subscribe( t =>{
      this.traits = t.results;
      console.log(this.traits);
    })
  }
}
