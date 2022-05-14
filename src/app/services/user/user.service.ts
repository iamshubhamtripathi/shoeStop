import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  connect = environment.connection_string + "users";

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.connect);
  }
  getUserById(id:number){
    return this.http.get(this.connect+id);
  }
  setUser(a:string){
    return this.http.post(this.connect, JSON.parse(a));
  }
  updateUser(id:number, a:string){
    return this.http.put(this.connect+id, JSON.parse(a));
  }
  deleteUser(id:number){
    return  this.http.delete(this.connect+id);
  }
}
