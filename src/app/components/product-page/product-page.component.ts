import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent{

  @Input() id = 0;
  id1 = 0;
  product: any;

  constructor(private emp: ProductService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id1 = params['id'];
  });
    this.get();
  }

  get(){
    this.emp.getProductById(this.id1).subscribe(data => this.product = data);
  }

}
