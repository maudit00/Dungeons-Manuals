import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { DetailsComponent } from './components/details/details.component';




@NgModule({
  declarations: [
    StatsTableComponent,
    DetailsComponent
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
