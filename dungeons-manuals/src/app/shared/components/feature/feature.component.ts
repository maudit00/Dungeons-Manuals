import { Component , Input} from '@angular/core';
import { FeaturesService } from '../../../Services/features.service';
import { IFeatures } from '../../../Models/i-features';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
@Input () feature!:IFeatures;
constructor (private featuresSvc:FeaturesService){}
}
