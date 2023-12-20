import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClass } from '../../../Models/i-class';
import { ClassesService } from '../../../Services/classes.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.scss'
})
export class ClassDetailComponent {
  classChosen: string = ''
  classDetails!: IClass;
  constructor(private classesSvc: ClassesService, private active: ActivatedRoute) {
    this.active.params.subscribe(params => {
      this.classesSvc.getSpecificClass(params['index']).subscribe(classe => {
        this.classDetails = classe
        console.log(this.classDetails);
      })
    })

  }
}
