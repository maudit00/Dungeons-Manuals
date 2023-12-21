import { Component, Input } from '@angular/core';
import { IDamageAtCharacterLevel } from '../../../models/i-spell';


@Component({
  selector: 'app-trick-damage-table',
  templateUrl: './trick-damage-table.component.html',
  styleUrl: './trick-damage-table.component.scss'
})
export class TrickDamageTableComponent {
  @Input() damage!:IDamageAtCharacterLevel
}
