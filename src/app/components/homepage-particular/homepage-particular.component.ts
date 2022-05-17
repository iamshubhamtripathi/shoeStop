import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-homepage-particular',
  templateUrl: './homepage-particular.component.html',
  styleUrls: ['./homepage-particular.component.css']
})
export class HomepageParticularComponent  {
  


  products: any;

  constructor(private product: ProductService  ) {}


  getProductById(id:number){

    this.product.getProductById(id).subscribe(data => this.products = data);

     }

}
