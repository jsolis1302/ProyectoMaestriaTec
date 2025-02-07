import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './products/product/product.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './users/user/user.component';
import { ShoppingListComponent } from './cart/shopping-list/shopping-list.component';
import { SharedService } from './shared/shared.service';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AddressListComponent } from './users/address-list/address-list.component';
import { AddressItemComponent } from './users/address-list/address-item/address-item.component';
import { OrderComponent } from './orders/order/order.component';
import { UserListComponent } from './users/user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FooterComponent,
    ProductComponent,
    ProductItemComponent,
    ProductDetailComponent,
    AdminComponent,
    UserComponent,
    ShoppingListComponent,
    UserInfoComponent,
    AddressListComponent,
    AddressItemComponent,
    OrderComponent,
    UserListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModalModule,
    MdbFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
