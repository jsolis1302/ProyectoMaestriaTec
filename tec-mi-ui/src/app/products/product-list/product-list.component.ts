import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[] = [
    new  Product("Playera","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",120),
    new  Product("Playera2","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139),
    new  Product("Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99),
    new  Product("Playera4","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",179),
    new  Product("Playera5","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",139),
    new  Product("Playera6","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",99),
    new  Product("Playera7","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",199),
    new  Product("Playera8","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" ,120)
  ]

}
