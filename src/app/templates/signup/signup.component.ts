import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public model:any ={};
  constructor(private _apiservice:ApiserviceService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  signup(){
    this._apiservice.signup(this.model).subscribe(
      data=>{
        console.log("data:",data);
        this.toastr.success(data['message'],"Success");
        this.router.navigate(['/login']);
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
    }
}
