import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { AddressListComponent, HomepageComponent, HomepageParticularComponent, OrderListComponent, ProductListComponent, ProductPageComponent, UserListComponent } from './components';
=======
import { AddressListComponent, OrderListComponent, ProductCreateComponent, ProductListComponent, ProductEditComponent, UserListComponent, OrderEditComponent, AddressEditComponent, AddressCreateComponent } from './components';
>>>>>>> bf3da60425350163fb15f7fb238b350a49dfe4b1
import { AddressContainerComponent, OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsContainerComponent, children: [
    { path: '', component: ProductListComponent },
    { path: 'product/create', component: ProductCreateComponent},
    { path: 'product/edit/:id', component : ProductEditComponent}
  ] },
  { path: 'orders', component: OrdersContainerComponent, children: [
    { path: '', component: OrderListComponent },
    { path: 'order/edit/:id', component : OrderEditComponent},
  ] },
  { path: 'users', component: UsersContainerComponent, children: [
    { path: '', component: UserListComponent },
  ] },
  { path: 'addresses', component: AddressContainerComponent, children: [
    { path: '', component: AddressListComponent },
    { path: 'address/create', component: AddressCreateComponent},
    { path: 'address/edit/:id', component : AddressEditComponent},
  ] },
  { path: 'homepage',component:HomepageComponent},
  
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
