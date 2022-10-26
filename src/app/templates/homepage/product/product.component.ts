import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import{ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public user_type:any;
  public products:any=[];

  constructor(
    private _apiservice:ApiserviceService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

    console.log("product component")
    let token = localStorage.getItem('token');
    console.log("Token for all products",token)
    this.user_type = localStorage.getItem('user_type');
    
    if(!token){
      this.router.navigate(['/login']);
    }
    this._apiservice.getProduct().subscribe(data =>{
      this.products = data['product'];
    },
    error =>{
      this.toastr.error(error.error.message,"Error");
      this.router.navigate(['/login']);
    }
    )
  }

}
