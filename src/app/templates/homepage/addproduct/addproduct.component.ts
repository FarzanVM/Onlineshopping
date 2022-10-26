import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  public model:any={};
  constructor(private _apiservice:ApiserviceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._apiservice.addProduct(this.model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error=>{
        console.log(error);
      }
    )
  }
}
