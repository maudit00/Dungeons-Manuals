import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitsRoutingModule } from './traits-routing.module';
import { TraitsComponent } from './traits.component';


@NgModule({
  declarations: [
    TraitsComponent
  ],
  imports: [
    CommonModule,
    TraitsRoutingModule,
    SharedModule
  ]
})
export class TraitsModule { }
