import { Component } from '@angular/core';
import { RulesService } from '../../Services/rules.service';
import { IRules } from '../../Models/i-rules';
import { IRef } from '../../Models/i-ref';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {

  rulesArray:IRef[] = [];

  constructor(private rulesSvc:RulesService){
    this.rulesSvc.getRules().subscribe(data=>
      this.rulesArray = data
      );
      console.log(this.rulesArray)
  }

}
