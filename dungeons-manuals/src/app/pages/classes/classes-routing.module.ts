import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { DetailsComponent } from '../../shared/components/details/details.component'

const routes: Routes = [
  {
    path: '',
    component: ClassesComponent
  },
  {
    path: ':index',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
