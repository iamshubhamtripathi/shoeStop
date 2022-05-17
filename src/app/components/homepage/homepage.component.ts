import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
id = 0;
products:any;
filterTerm!: any;
constructor(private product: ProductService) {

this.get();

 }


  get(){

    this.product.getProducts().subscribe(data => this.products = data);

  }
  
  



 

}
