import { Client } from "./client.model";
import { ordersD } from "./ordersD.model";

export class ordersM{


    constructor(public id:number,public oDate:String, public client:Client, public oDetail:ordersD[],public total:number){}
}