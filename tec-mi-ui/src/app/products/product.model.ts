export class Product{


    constructor(
        public productId:number, 
        public name:string, 
        public description:string, 
        public imagePath:string, 
        public price:number,
        public code:string,
        public active:boolean
     ){}
}

