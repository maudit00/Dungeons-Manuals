import { Component } from '@angular/core';
import { ITrDetail } from '../../../Models/i-trdetail';
import { TraitsService } from '../../../Services/traits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trais-detail',
  templateUrl: './trais-detail.component.html',
  styleUrl: './trais-detail.component.scss'
})
export class TraisDetailComponent {

  traitDetails!:ITrDetail

  constructor(
    private traitSvc:TraitsService,
    private active:ActivatedRoute
    ){
    this.active.params.subscribe(params => {
      this.traitSvc.getSpecificTrait(params['index']).subscribe(trait =>{
        this.traitDetails=trait;
        console.log(trait);


      })
    })
}
}
