import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { OrderListComponent, ProductListComponent, UserListComponent, ProductPageComponent,HomepageComponent,HomepageParticularComponent} from './components';
import { OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressContainerComponent } from './containers/address-container/address-container.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

=======
import { OrderListComponent, ProductListComponent, UserListComponent, ProductEditComponent, AddressEditComponent, AddressCreateComponent, OrderEditComponent, ProductCreateComponent, AddressListComponent } from './components';
import { AddressContainerComponent, OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';
>>>>>>> bf3da60425350163fb15f7fb238b350a49dfe4b1

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    UsersContainerComponent,
    OrdersContainerComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent,
    ProductEditComponent,
    AddressListComponent,
    AddressContainerComponent,
    ProductCreateComponent,
<<<<<<< HEAD
    HomepageComponent,
    HomepageParticularComponent
=======
    OrderEditComponent,
    AddressCreateComponent,
    AddressEditComponent
>>>>>>> bf3da60425350163fb15f7fb238b350a49dfe4b1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
