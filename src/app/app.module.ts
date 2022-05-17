import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent, ProductListComponent, UserListComponent, ProductPageComponent,HomepageComponent,HomepageParticularComponent} from './components';
import { OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressContainerComponent } from './containers/address-container/address-container.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    AddressContainerComponent,
    ProductCreateComponent,
    HomepageComponent,
    HomepageParticularComponent
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
