import { Component } from '@angular/core';
import { RacesService } from '../../Services/races.service';
import { IRef } from '../../Models/i-ref';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent {
races:IRef[] = []

constructor (private racesSvc:RacesService){
this.getRaces()
}

getRaces() {
	this.racesSvc.getRaces().subscribe(races => {
		this.races = races.results
		console.log (this.races, races.results)
	})
}
}
