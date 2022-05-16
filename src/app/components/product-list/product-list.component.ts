import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  products: any;
  toggle: boolean = true;

  constructor(private product: ProductService) {
    this.get();
  }

  get(){
    this.product.getProducts().subscribe(data => this.products = data);
  }
  toggleForm(){
    this.toggle = !this.toggle;
  }

}
