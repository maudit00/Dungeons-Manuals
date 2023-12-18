import { Component, Input } from '@angular/core';
import { IClass } from '../../../Models/i-class';
import { IRef } from '../../../Models/i-ref';
import { ClassesService } from '../../../Services/classes.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.scss'
})
export class ClassDetailsComponent {

  @Input () class!:IRef

  classDetails!:IClass;

  constructor(private classesSvc:ClassesService){
    this.classesSvc.getSpecificClass(this.class).subscribe(classe => this.classDetails = classe)
  }


}
