import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[] = [
    new  Product(1,"Playera","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",120,"001"),
    new  Product(2,"Playera2","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"002"),
    new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99,"003"),
    new  Product(4,"Playera4","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",179,"001"),
    new  Product(5,"Playera5","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139,"001"),
    new  Product(6,"Playera6","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",99,"001"),
    new  Product(7,"Playera7","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",199,"001"),
    new  Product(8,"Playera8","Playera Nueva ideaal para el trabajo o una salida casual, 100% algodon","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" ,120,"001")
  ]
  

}
