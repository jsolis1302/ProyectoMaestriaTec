import { Address } from "./address.model";

export class Client{


    constructor(
        public name:string, 
        public email:string, 
        public phone:number,
        public clientId:number,
        public clientType:string,
        public addresses:Address[],
        public active:boolean
    ){}
}
