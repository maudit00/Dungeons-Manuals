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
	race:IRace = {
    index: '',
    name: '',
    speed: 0,
    ability_bonuses: [],
    alignment: '',
    age: '',
    size: '',
    size_description: '',
    starting_proficiencies: [],
    starting_proficiency_options: {
      choose: 0,
      desc: '',
      type: '',
      from: {
        option_set_type: '',
        options: [
          {
            item :{
              index: '',
              name: '',
              url: ''
            },
            option_type: ''
          }
        ]
      }
    },
    languages: [],
    language_desc: '',
    traits: [],
    subraces: [],
    url: ''
  } ;

	constructor (private racesSvc:RacesService, private active:ActivatedRoute){
	this.active.params.subscribe(param => {
		this.racesSvc.getSpecificRace(param['index']).subscribe(race =>{
			this.race = race
			console.log ( this.race)

		})
	})


}
}
