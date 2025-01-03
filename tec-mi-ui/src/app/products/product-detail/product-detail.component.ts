import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!:Product;

  sizes:string[] = ["S","M","L"];
  selectedValue = "S";

  constructor(public modalRef: MdbModalRef<ProductDetailComponent>) {}

}
