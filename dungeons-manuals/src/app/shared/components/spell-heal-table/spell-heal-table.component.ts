import { Component, Input } from '@angular/core';
import { IHealAtSlotLevel } from '../../../Models/i-spell';

@Component({
  selector: 'app-spell-heal-table',
  templateUrl: './spell-heal-table.component.html',
  styleUrl: './spell-heal-table.component.scss'
})
export class SpellHealTableComponent {
  @Input() heal!:IHealAtSlotLevel
}
