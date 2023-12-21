import { IDamageAtSlotLevel } from './../../../Models/i-spell';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spell-damage-table',
  templateUrl: './spell-damage-table.component.html',
  styleUrl: './spell-damage-table.component.scss'
})
export class SpellDamageTableComponent {
  @Input() damage!: IDamageAtSlotLevel
}
