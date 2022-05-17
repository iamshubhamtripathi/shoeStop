import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressListComponent, HomepageComponent, HomepageParticularComponent, OrderListComponent, ProductListComponent, ProductPageComponent, UserListComponent } from './components';
import { AddressContainerComponent, OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsContainerComponent, children: [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component : ProductPageComponent}
  ] },
  { path: 'orders', component: OrdersContainerComponent, children: [
    { path: '', component: OrderListComponent },
  ] },
  { path: 'users', component: UsersContainerComponent, children: [
    { path: '', component: UserListComponent },
  ] },
  { path: 'addresses', component: AddressContainerComponent, children: [
    { path: '', component: AddressListComponent },
  ] },
  { path: 'homepage',component:HomepageComponent},
  
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
