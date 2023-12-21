import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitsComponent } from './traits.component';
import { TraitsDetailComponent } from '../../shared/components/traits-detail/traits-detail.component';

const routes: Routes = [
  { path: '', component: TraitsComponent },
  {path:':index', component: TraitsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitsRoutingModule { }
