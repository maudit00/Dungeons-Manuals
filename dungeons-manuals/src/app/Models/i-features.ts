import { IRef } from "./i-ref"
export interface IFeatures {
 class:IRef;
 subclass:IRef;
 name:string;
 level:number;
 prerequisites:any[];
 desc:string[];
 url:string;
}
