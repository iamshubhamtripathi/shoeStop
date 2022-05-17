<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from "@angular/router";
import { categories, brands, colors } from 'src/app/Constants';
=======
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';
import { brands, categories, colors, productTitles } from 'src/app/Constants';
import { Router } from '@angular/router';
>>>>>>> bf3da60425350163fb15f7fb238b350a49dfe4b1

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
<<<<<<< HEAD

export class ProductCreateComponent  {
  id = 0;
  product: any;
  titles: string[] = ["Brand","Name","Description","Price","Category","Size","Color","Quantity","Image Url"];
  categories = categories;
  brands = brands;
  colors = colors;

  constructor(private emp: ProductService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      }
    );
    this.get();
  }


  get(){
    this.emp.getProductById(this.id).subscribe(data => this.product = data);
=======
export class ProductCreateComponent{

  titles: string[] = productTitles;
  categories: string[] = categories;
  brands: string[] = brands;
  colors: string[] = colors;
  jsonString: string = "";


  constructor(private productService: ProductService, private router: Router) { }

  post(brand:string,name:string,description:string,price:string,category:string,size:string,color:string,quantity:string,image:string){
    this.jsonString = '{"brand":"'+brand+'","name":"'+name+'","description":"'+description+'","price":'+price+',"category":"'+category+'","size":'+size+',"color":"'+color+'","quantity":'+quantity+',"image":"'+image+'"}';
    this.productService.setProduct(this.jsonString).subscribe();
    this.router.navigate(['/']);
>>>>>>> bf3da60425350163fb15f7fb238b350a49dfe4b1
  }

}
