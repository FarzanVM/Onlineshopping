import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header-interceptor';
import { ApiserviceService } from './services/apiservice.service'
import { ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { ProductComponent } from './templates/homepage/product/product.component';
import { AddproductComponent } from './templates/homepage/addproduct/addproduct.component';
import { DeleteproductComponent } from './templates/homepage/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './templates/homepage/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    ProductComponent,
    AddproductComponent,
    DeleteproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ApiserviceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
