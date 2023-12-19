import { IRef, IRes } from './../../Models/i-ref';
import { Component } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { ActivatedRoute } from '@angular/router';
import { ISubClass } from '../../Models/i-sub-class';

@Component({
  selector: 'app-sub-classes',
  templateUrl: './sub-classes.component.html',
  styleUrl: './sub-classes.component.scss'
})
export class SubClassesComponent {
	subClassDetails!:ISubClass;
  subClassesArr!: IRef[];
  loading:boolean = true

	constructor (private active:ActivatedRoute, private classesSvc:ClassesService){
    this.getSubClasses()
}

getSubClasses(){
  this.classesSvc.getSubClasses().subscribe(subclasses => this.subClassesArr = subclasses.results)
}

getSubClassDetails (subc:IRef){
  this.loading = true;
  this.classesSvc.getSpecificSubClass(subc.index).subscribe(subclass => {
    this.subClassDetails = subclass
    this.loading = false;
  })
}

}
