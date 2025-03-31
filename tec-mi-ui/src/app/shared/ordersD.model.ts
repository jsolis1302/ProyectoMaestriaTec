import { Product } from "../products/product.model";

export class ordersD{


    constructor(public id:number,public orderMid:number, public product:Product,public qty:number){}
}