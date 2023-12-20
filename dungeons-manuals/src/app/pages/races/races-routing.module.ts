import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races.component';
import { RaceComponent } from '../../shared/components/race/race.component';
const routes: Routes = [
	{
	 path: '',
	 component: RacesComponent
	},
	{
	 path:':index',
	 component: RaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacesRoutingModule { }
