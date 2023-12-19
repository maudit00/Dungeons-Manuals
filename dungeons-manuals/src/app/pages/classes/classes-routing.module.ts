import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { ClassDetailComponent } from '../../shared/components/class-detail/class-detail.component';



const routes: Routes = [
  {
    path: '',
    component: ClassesComponent
  },
  {
    path:':index',
    component: ClassDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
