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
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003"),3,"S"),
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003"),2,"M"),
    new Item(new  Product(3,"Playera3","Playera Nueva","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",100,"003"),4,"L")

  ];

   total = this.cartItems.reduce((sum, current) => sum + (current.qty * current.product.price), 0);

}
