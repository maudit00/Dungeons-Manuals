import { IRef } from './i-ref';

export interface IRace  {
  index: string
  name: string
  speed: number
  ability_bonuses: Array<{
    ability_score: {
      index: string
      name: string
      url: string
    }
    bonus: number
  }>
  alignment: string
  age: string
  size: string
  size_description: string
  starting_proficiencies: IRef[]
  starting_proficiency_options: {
	  choose: number;
	  desc: string;
	  from : {
		  option_set_type:string;
		  options:IRef[];
	  }
  }
  languages: IRef[]
  language_desc: string
  traits: IRef[]
  subraces: IRef[]
  url: string
}


