import { Product } from "../products/product.model";

export class Item{


    constructor(public product:Product, public qty:number, public size:string){}
}