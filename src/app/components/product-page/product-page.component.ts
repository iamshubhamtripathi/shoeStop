import { Component } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from "@angular/router";
import { categories, brands, colors } from 'src/app/Constants';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent{

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
  }

}
