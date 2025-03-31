import { Component } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Client } from 'src/app/shared/client.model';
import { Item } from 'src/app/shared/item';
import { ordersD } from 'src/app/shared/ordersD.model';
import { ordersM } from 'src/app/shared/ordersM.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

    user:Client = new Client("Jorge","Jorge.solis@mail.com",552211447,1,"A");
    user2:Client = new Client("Jorge","Jorge.solis@mail.com",552211447,1,"A");
    user3:Client = new Client("Jorge","Jorge.solis@mail.com",552211447,1,"A");

    ordersDetail1:ordersD = new ordersD(1,1,new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3)
    ordersDetail2:ordersD = new ordersD(1,1,new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3)
    ordersDetail3:ordersD = new ordersD(1,1,new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3)
    ordersDetail4:ordersD = new ordersD(1,1,new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3)
    ordersDetail5:ordersD = new ordersD(1,1,new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003",true),3)

    ordersDt:ordersD[]=[this.ordersDetail1,this.ordersDetail2];

    orders:ordersM[]=[
      new ordersM(1,"10/03/25",this.user,this.ordersDt,800),
      new ordersM(2,"13/02/25",this.user2,this.ordersDt,300),
      new ordersM(3,"27/01/25",this.user2,this.ordersDt,1000)
  
    ];
  
    products:Product[] = [
      new  Product(1,"Jersey deportiva","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",120,"001",true),
      new  Product(2,"Jersey deportiva","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"002",true),
      new  Product(3,"Jersey deportiva","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99,"003",true),
      new  Product(4,"Jersey deportiva","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",179,"001",true),
      new  Product(5,"Jersey deportiva","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"001",true),
      new  Product(6,"Jersey deportiva","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",99,"001",true),
      new  Product(7,"Jersey deportiva","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",199,"001",true),
      new  Product(8,"Jersey deportiva","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" ,120,"001",true)
    ]



}
