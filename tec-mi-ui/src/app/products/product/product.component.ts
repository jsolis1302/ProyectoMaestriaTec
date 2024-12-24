import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product= new  Product("Playera","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",120)

}
