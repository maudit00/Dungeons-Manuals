import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubClassesComponent } from './sub-classes.component';
import { SubClassComponent } from '../../shared/components/sub-class/sub-class.component'

const routes: Routes = [
	{
		path: '',
	       	component: SubClassesComponent
  },
	{
		path: ':index',
		component: SubClassComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubClassesRoutingModule { }
