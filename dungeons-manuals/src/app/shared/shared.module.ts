import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';




@NgModule({
  declarations: [
    StatsTableComponent,
    ClassDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    StatsTableComponent,
  ]
})
export class SharedModule { }
