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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModalModule,
    MdbFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
