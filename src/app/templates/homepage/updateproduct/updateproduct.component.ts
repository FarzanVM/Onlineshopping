import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  public model:any={};
  constructor(private _apiservice:ApiserviceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  updateProduct(){
    this._apiservice.update(this.model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error=>{
        console.log(error);
      }
    )
  }
}
