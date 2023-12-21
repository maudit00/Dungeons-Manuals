export interface IRef {
  index:string;
  name:string;
  url:string;
}

export interface IRes {
  count:number
  results:IRef[]
}
export interface ISpellRes extends IRef{
  level:number
}
