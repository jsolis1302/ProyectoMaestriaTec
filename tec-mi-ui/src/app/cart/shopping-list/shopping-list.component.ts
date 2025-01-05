import { Component } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Item } from 'src/app/shared/item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  cartItems:Item[]=[
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99,"003"),3,"S"),
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",99,"003"),2,"M")
  ];

}
