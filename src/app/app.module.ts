import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent, ProductListComponent, UserListComponent, ProductPageComponent } from './components';
import { OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressContainerComponent } from './containers/address-container/address-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    UsersContainerComponent,
    OrdersContainerComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent,
    ProductPageComponent,
    AddressListComponent,
    AddressContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
