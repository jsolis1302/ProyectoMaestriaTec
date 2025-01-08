import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Item } from 'src/app/shared/item';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  cartItems:Item[]=[];

  total = this.cartItems.reduce((sum, current) => sum + (current.qty * current.product.price), 0);
  constructor(private sharedService:SharedService) {}
  ngOnInit(): void {
    this.cartItems = this.sharedService.cartItems
  }
   

}
