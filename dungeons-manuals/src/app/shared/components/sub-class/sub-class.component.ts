import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ClassesService } from '../../../Services/classes.service';

@Component({
  selector: 'app-sub-class',
  templateUrl: './sub-class.component.html',
  styleUrl: './sub-class.component.scss'
})
export class SubClassComponent {
	subClassDetails!:any;

	constructor (private active:ActivatedRoute, private classesSvc:ClassesService){
	this.active.params.subscribe(params => {
		this.classesSvc.getSpecificSubClass(params['index']).subscribe(subclass =>{
			this.subClassDetails = subclass
			console.log(this.subClassDetails)
		})
	})
}
}
