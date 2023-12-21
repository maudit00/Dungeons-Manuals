import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SubClassComponent} from './components/sub-class/sub-class.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { SpellTableComponent } from './components/spell-table/spell-table.component';
import { SpellDetailComponent } from './components/spell-detail-component/spell-detail-component'
import { TrickDamageTableComponent } from './components/trick-damage-table/trick-damage-table.component';
import { SpellDamageTableComponent } from './components/spell-damage-table/spell-damage-table.component';
import { SpellHealTableComponent } from './components/spell-heal-table/spell-heal-table.component';

@NgModule({
  declarations: [
    StatsTableComponent,
    ClassDetailComponent,
    SubClassComponent,
    MonsterDetailComponent,
    SpellTableComponent,
    SpellDetailComponent,
    TrickDamageTableComponent,
    SpellDamageTableComponent,
    SpellHealTableComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    StatsTableComponent,
    NgbAccordionModule,
    RouterModule,
    SpellTableComponent
  ]
})
export class SharedModule { }
