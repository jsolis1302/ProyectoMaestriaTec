import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products:Product[]=[];

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.products = this.sharedService.products;
  }

 
  

}
