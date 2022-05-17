import { Component } from '@angular/core';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent{

  orders: any;
  titles: string[] = ["User Id","Product Id","Quantity","Address","Status","Created At","Delivered At"]

  constructor(private order:OrderService) {
    this.get();
  }

  get(){
    this.order.getOrders().subscribe(data => this.orders = data);
  }

}
