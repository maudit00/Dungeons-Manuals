import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterComponent } from './monster.component';
import { MonsterDetailComponent } from '../../shared/components/monster-detail/monster-detail.component';


const routes: Routes = [
  { path: '', component: MonsterComponent },
  { path:':index', component: MonsterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule {}
