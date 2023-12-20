import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ClassesService } from '../../../Services/classes.service';
import { ISubClass } from '../../../Models/i-sub-class';
import { Levels } from '../../../Models/i-class';

@Component({
  selector: 'app-sub-class',
  templateUrl: './sub-class.component.html',
  styleUrl: './sub-class.component.scss'
})
export class SubClassComponent {
	subClassDetails!:ISubClass;
  levels!:Levels;

	constructor (private active:ActivatedRoute, private classesSvc:ClassesService){
	this.active.params.subscribe(params => {
		this.classesSvc.getSpecificSubClass(params['index']).subscribe(subclass =>{
			this.subClassDetails = subclass
      this.classesSvc.getSubClassesLevels(params['index']).subscribe(levels => {
        this.levels = levels
        console.log(this.levels)
      })
			console.log(this.subClassDetails)
		})
	})
}
}
