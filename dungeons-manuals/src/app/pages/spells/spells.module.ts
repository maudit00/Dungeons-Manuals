import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsComponent } from './spells.component';


@NgModule({
  declarations: [
    SpellsComponent
  ],
  imports: [
    CommonModule,
    SpellsRoutingModule
  ]
})
export class SpellsModule { }
