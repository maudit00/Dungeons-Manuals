import { Component, Input } from '@angular/core';
import { ISpellRes } from '../../../Models/i-ref';

@Component({
  selector: 'app-spell-table',
  templateUrl: './spell-table.component.html',
  styleUrl: './spell-table.component.scss'
})
export class SpellTableComponent {
  @Input() spells:ISpellRes[]=[];
}
