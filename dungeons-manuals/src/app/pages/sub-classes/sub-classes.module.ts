import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubClassesRoutingModule } from './sub-classes-routing.module';
import { SubClassesComponent } from './sub-classes.component';


@NgModule({
  declarations: [
    SubClassesComponent
  ],
  imports: [
    CommonModule,
    SubClassesRoutingModule
  ]
})
export class SubClassesModule { }
