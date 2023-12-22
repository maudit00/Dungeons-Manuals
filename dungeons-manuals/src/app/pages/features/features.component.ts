import { Component } from '@angular/core';
import { FeaturesService } from '../../Services/features.service';
import { IRef, IRes } from '../../Models/i-ref';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
	featuresArr:IRef[]= [];

constructor (private featuresSvc:FeaturesService) {
	this.getFeatures()
	console.log(this.featuresArr)
}

getFeatures (){
	this.featuresSvc.getFeatures().subscribe(features => {
		this.featuresArr = features.results
		console.log(this.featuresArr)
	})
}

}