import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterRoutingModule } from './monster-routing.module';
import { MonsterComponent } from './monster.component';


@NgModule({
  declarations: [
    MonsterComponent
  ],
  imports: [
    CommonModule,
    MonsterRoutingModule
  ]
})
export class MonsterModule { }
