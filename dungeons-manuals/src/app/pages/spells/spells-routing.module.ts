import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsComponent } from './spells.component';
import { SpellDetailComponent } from '../../shared/components/spell-detail-component/spell-detail-component';

const routes: Routes = [
  { path: '', component: SpellsComponent },
  { path: ':index', component:SpellDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsRoutingModule { }
