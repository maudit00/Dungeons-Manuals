import { Component } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { IClass } from '../../Models/i-class';
import { IRef } from '../../Models/i-ref';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

  constructor(private classesSvc: ClassesService){}

  classes:IRef[] = []

  getClasses(){
    this.classesSvc.getClasses().subscribe(classes =>{
      this.classes = classes;
    })
  }

}
