import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';
import { Item } from './item.model';
import { Client } from './client.model';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  cartItems:Item[]=[
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3,"S"),
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),2,"M"),
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),4,"L")

  ];

  products:Product[] = [
    new  Product(1,"Playera","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",120,"001",true),
    new  Product(2,"Playera2","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"002",true),
    new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99,"003",true),
    new  Product(4,"Playera4","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",179,"001",true),
    new  Product(5,"Playera5","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"001",true),
    new  Product(6,"Playera6","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",99,"001",true),
    new  Product(7,"Playera7","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",199,"001",true),
    new  Product(8,"Playera8","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" ,120,"001",true)
  ]

 

  address1:Address = new Address(1,"Calle 21","32","Merida","Yucatan",97302,"Mexico",1,"Casa")
  address2:Address = new Address(2,"Calle 22","32","Merida","Yucatan",97300,"Mexico",1,"Oficina")

  addresses:Address[] = [this.address1,this.address2];

  user:Client = new Client("Jorge","Jorge.solis@mail.com",552211447,1,"A",this.addresses,true);

  constructor() { }
}
