import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubClassesRoutingModule } from './sub-classes-routing.module';
import { SubClassesComponent } from './sub-classes.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SubClassesComponent
  ],
  imports: [
    CommonModule,
    SubClassesRoutingModule,
    SharedModule
  ]
})
export class SubClassesModule { }
