import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  products: any;
  titles: string[] = ["Brand","Name","Description","Price","Category","Size","Color","Quantity"];

  constructor(private product: ProductService) {
    this.get();
  }

  get(){
    this.product.getProducts().subscribe(data => this.products = data);
  }
  delete(id:number){
    this.product.deleteProduct(id).subscribe();
    location.reload();
  }
}
