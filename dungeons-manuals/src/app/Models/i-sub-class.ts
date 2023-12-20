import {IRef} from './i-ref';

export type ISubClass = {
  index: string
  class: {
    index: string
    name: string
    url: string
  }
  name: string
  subclass_flavor: string
  desc: Array<string>
  subclass_levels: string
  url: string
  spells: Array<ISpells>
}


export interface ISpells {
  prerequisites:{
	  index:string;
	  type:string;
	  name:string;
	  url:string;
  }
  spell:IRef;
}
