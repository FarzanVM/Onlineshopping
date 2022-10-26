import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  allproduct(){
    this.router.navigate(['home/allproducts'])
  }
  updateProduct(){
    this.router.navigate(['home/updateproduct'])
  }
  deleteProduct(){
    this.router.navigate(['home/deleteproduct'])
  }
  addProduct(){
    this.router.navigate(['home/addproduct'])
  }
}
