import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { SharedModule } from '../../shared/shared.module';
import { ClassDetailsComponent } from './class-details/class-details.component';


@NgModule({
  declarations: [
    ClassesComponent,
    ClassDetailsComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    SharedModule
  ]
})
export class ClassesModule { }
