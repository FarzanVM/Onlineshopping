import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model:any={};
  constructor(private apiservice:ApiserviceService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    this.apiservice.login(this.model).subscribe(
      data=>{
        console.log(data);
        if(data['message'] === "Auth successfull"){
          console.log("data:",data);
        this.toastr.success(data["message"],"Success");
        localStorage.setItem('user_type',data['user-type']);
        localStorage.setItem("token",data['token']);
        this.router.navigate(['/home']);
        }
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }

}
