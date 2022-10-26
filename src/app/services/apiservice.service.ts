import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient:HttpClient) { }
  login(model:any){
    return this.httpClient.post("http://localhost:3000/user/login",model);
  }
  signup(model:any){
    console.log("HEre we")
    return this.httpClient.post("http://localhost:3000/user/signup",model);
  }
  getProduct(){
    return this.httpClient.get("http://localhost:3000/products/allproducts");
  }
  addProduct(model:any){
    return this.httpClient.post("http://localhost:3000/products/addproduct",model);
  }
  update(model:any){
    return this.httpClient.patch("http://localhost:3000/products/updateproduct",model);
  }
  delete(model:any){
    return this.httpClient.patch("http://localhost:3000/products/deleteproduct",model);
  }

}
