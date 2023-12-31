import { Component } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { IRef } from '../../Models/i-ref';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

  classes:IRef[] = []
  chosen:boolean = false


  constructor(private classesSvc: ClassesService){
    this.getClasses()
  }

  getClasses(){
    this.classesSvc.getClasses().subscribe(classes =>{
      this.classes = classes.results;
    })
  }


}
