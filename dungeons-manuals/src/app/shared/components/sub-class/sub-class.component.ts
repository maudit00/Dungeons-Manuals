import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ClassesService } from '../../../Services/classes.service';
import { ISubClass } from '../../../Models/i-sub-class';
import { Levels } from '../../../Models/i-class';
import { IRef, IRes } from '../../../Models/i-ref';
@Component({
  selector: 'app-sub-class',
  templateUrl: './sub-class.component.html',
  styleUrl: './sub-class.component.scss'
})
export class SubClassComponent {

	subClassDetails!:ISubClass;
	levels!:Levels;
	features!:IRef[];

	constructor (private active:ActivatedRoute, private classesSvc:ClassesService){
	this.active.params.subscribe(params => {
		this.classesSvc.getSpecificSubClass(params['index']).subscribe(subclass =>{
			this.subClassDetails = subclass
		      this.classesSvc.getSubClassesLevels(params['index']).subscribe(levels => {
			this.levels = levels
			console.log(this.levels)
		      })
		      this.classesSvc.getSubClassesFeatures(params['index']).subscribe(features => {
			      this.features = features.results
            console.log(this.features)
		      })
			console.log(this.subClassDetails)
		})
	})
}
}
