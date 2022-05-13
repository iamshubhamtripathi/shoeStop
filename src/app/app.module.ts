import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent, ProductListComponent, UserListComponent } from './components';
import { OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';


@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    UsersContainerComponent,
    OrdersContainerComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
