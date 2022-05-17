import { Component } from '@angular/core';
import { orderTitles, status } from 'src/app/Constants';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent{

  orders: any;
  titles: string[] = orderTitles;
  status: string[] = status;
  jsonString: string = "";
  
  

  constructor(private order:OrderService) {
    this.get();
  }

  checkStatus(status: string): boolean{
    switch(status) {
      case "Processing":
        return false;
      case "Delivered":
        return true;
      case "Cancelled":
        return true;
      default:
        return false;
    }
  }

  get(){
    this.order.getOrders().subscribe(data => this.orders = data);
  }
  put(id:string,userId:string,productId:string,quantity:string,addressId:string,status:string,createdAt:string,deliveredAt:string){
    this.jsonString = '{"id": '+id+',"userId":'+userId+',"productId":'+productId+',"quantity":'+quantity+',"addressId":'+addressId+',"status":"'+status+'","createdAt":"'+createdAt+'","deliveredAt":"'+deliveredAt+'"}';
    this.order.updateOrder(Number.parseInt(id),this.jsonString).subscribe();
    location.reload();
  }

}
