import { Component } from '@angular/core';
import { ClassesService } from '../../../Services/classes.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { IClass } from '../../../Models/i-class';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.scss'
})
export class ClassDetailsComponent {
classChosen:string = ''
classDetails!:IClass;
constructor(private classesSvc:ClassesService, private active:ActivatedRoute){
this.active.params.subscribe(params => {
  this.classesSvc.getSpecificClass(params['index']).subscribe(classe => this.classDetails = classe)
  console.log(this.classDetails, params);
})

}
}
