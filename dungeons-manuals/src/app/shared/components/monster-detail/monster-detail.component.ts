import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrl: './monster-detail.component.scss'
})
export class MonsterDetailComponent {
  constructor(
    private url:ActivatedRoute
  ){}

  ngOnInit(){
    this.url.params.subscribe(params => console.log(params)
    )
  }
}
