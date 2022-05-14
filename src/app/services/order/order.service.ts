import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  connect = environment.connection_string + "orders/";

  constructor(private http:HttpClient) { }

  getOrders(){
    return this.http.get(this.connect);
  }
  getOrderById(id:number){
    return this.http.get(this.connect+id);
  }
  setOrder(a:string){
    return this.http.post(this.connect, JSON.parse(a));
  }
  updateOrder(id:number, a:string){
    return this.http.put(this.connect+id, JSON.parse(a));
  }
  deleteOrder(id:number){
    return  this.http.delete(this.connect+id);
  }
}
