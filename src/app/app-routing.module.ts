import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './templates/homepage/addproduct/addproduct.component';
import { DeleteproductComponent } from './templates/homepage/deleteproduct/deleteproduct.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { ProductComponent } from './templates/homepage/product/product.component';
import { UpdateproductComponent } from './templates/homepage/updateproduct/updateproduct.component';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    component:HomepageComponent,
    children:[
      {
        path:'',
        component:ProductComponent
      },
      {
        path:'allproducts',
        component:ProductComponent
      },
      {
        path:'addproduct',
        component:AddproductComponent
      },
      {
        path:'deleteproduct',
        component:DeleteproductComponent
      },
      {
        path:'updateproduct',
        component:UpdateproductComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
