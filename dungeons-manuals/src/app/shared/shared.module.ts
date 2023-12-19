import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';
import { SubClassesComponent } from './components/class-detail/shared/components/sub-classes/sub-classes.component';




@NgModule({
  declarations: [
    StatsTableComponent,
    ClassDetailComponent,
    SubClassesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    StatsTableComponent,
    SubClassesComponent,
  ]
})
export class SharedModule { }
