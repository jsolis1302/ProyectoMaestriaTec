import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!:Product;
  modalRef: MdbModalRef<ProductDetailComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ProductDetailComponent, 
      {data:{product: this.product}
    });
  }

}
