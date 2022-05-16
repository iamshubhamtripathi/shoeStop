import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  categories:string[]=["Sneaker","Casual","Athletic"];
  brands:string[]=["Nike","Addidas","PUMA"]
  products: any;
  data='';
  productCreated:any;
  productEdit: any;
  filterTerm!: any;

  constructor(private product: ProductService) {
    this.get();
  }

  get(){
    this.product.getProducts().subscribe(data => this.products = data);
  }
  OnFormSubmit(b:string,n:string,d:string,p:string,ct:string,s:string,cl:string,q:string,i:string){
    this.data='{"brand":"'+b+'","name":"'+n+'","description":"'+d+'","price":'+p+',"category":"'+ct+'","size":'+s+',"color":"'+cl+'","quantity":'+q+',"image":"'+i+'"}';
    this.product.setProduct(this.data).subscribe(a=>this.productCreated=a);
    location.reload();
  }
  getById(){
    this.productEdit =  this.products;
  }
  key:string='brand';
  reverse :boolean =false;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
