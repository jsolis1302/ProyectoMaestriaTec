import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { ShoppingListComponent } from './cart/shopping-list/shopping-list.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AddressListComponent } from './users/address-list/address-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component:ProductComponent},
  { path: 'user', component: UserComponent, 
    children:[
      { path: ':clientId', component: UserInfoComponent },
      { path: ':clientId/address', component: AddressListComponent },
    ] 
  },
  { path: 'admin', component:AdminComponent},
  { path: 'cart', component:ShoppingListComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
