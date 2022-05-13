import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent, ProductListComponent, UserListComponent } from './components';
import { OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsContainerComponent, children: [
    { path: '', component: ProductListComponent },
  ] },
  { path: 'orders', component: OrdersContainerComponent, children: [
    { path: '', component: OrderListComponent },
  ] },
  { path: 'users', component: UsersContainerComponent, children: [
    { path: '', component: UserListComponent },
  ] },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
