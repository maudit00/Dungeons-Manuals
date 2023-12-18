import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';



@NgModule({
  declarations: [
    StatsTableComponent,
    ClassDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    StatsTableComponent,
    ClassDetailsComponent
  ]
})
export class SharedModule { }
