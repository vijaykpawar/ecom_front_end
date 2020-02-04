import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
//import { Product } from './products/product';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NavbarComponent } from './navbar/navbar.component';


import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { ListusersComponent } from './listusers/listusers.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewproductComponent,
    CustomerhomepageComponent,
    HomeComponent,
    ProductsComponent,
    ListproductComponent,
    ProductdetailsComponent,
    NavbarComponent,
    ListusersComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'listproducts', component: ListproductComponent },
      { path: 'home', component: HomeComponent },
      { path: 'productdetails', component: ProductdetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [ProductsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
