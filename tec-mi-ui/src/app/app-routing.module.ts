import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { ShoppingListComponent } from './cart/shopping-list/shopping-list.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AddressListComponent } from './users/address-list/address-list.component';
import { OrderComponent } from './orders/order/order.component';
import { UserListComponent } from './users/user-list/user-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component:ProductComponent},
  { path: 'user', component: UserComponent, 
    children:[
      { path: ':clientId', component: UserInfoComponent },
      { path: ':clientId/address', component: AddressListComponent },
    ] 
  },
  
  
  { path: 'admin', component:AdminComponent,
    children:[
      { path: 'orders', component: OrderComponent },
      { path: 'clients', component: UserListComponent },
      
    ] 
  },




  { path: 'cart', component:ShoppingListComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
