import { Component } from '@angular/core';
import { RacesService } from '../../../Services/races.service';
import { IRace } from '../../../Models/i-race';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss'
})
export class RaceComponent {
	race!:IRace ;

	constructor (private racesSvc:RacesService, private active:ActivatedRoute){
	this.active.params.subscribe(param => {
		this.racesSvc.getSpecificRace(param['index']).subscribe(race =>{
			this.race = race
			console.log ( this.race )
		})
	})


}
}
