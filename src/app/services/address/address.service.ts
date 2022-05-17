import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  connect = environment.connection_string + "addresses/";

  constructor(private http:HttpClient) { }

  getAddresses(){
    return this.http.get(this.connect);
  }
  getAddressById(id:number){
    return this.http.get(this.connect+id);
  }
  setAddress(a:string){
    return this.http.post(this.connect, JSON.parse(a));
  }
  updateAddress(id:number, a:string){
    return this.http.put(this.connect+id, JSON.parse(a));
  }
  deleteAddress(id:number){
    return  this.http.delete(this.connect+id);
  }
}
