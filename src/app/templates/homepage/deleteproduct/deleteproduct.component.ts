import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.scss']
})
export class DeleteproductComponent implements OnInit {
  public model:any={};
  constructor(private _apiservice:ApiserviceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  deleteProduct(){
    this._apiservice.delete(this.model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error=>{
        console.log(error);
      }
    )
  }
}
