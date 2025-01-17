export class Address{


    constructor(
        public addressId:number,
        public street:string, 
        public numb:string, 
        public city:string, 
        public state:string,
        public postalCode:number,
        public country:string,
        public clientId:number,
        public name:string
    ){}
}

