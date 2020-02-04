import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router,private pser:ProductsService) { }
  cart: any = {};
  address:any={};
  cartCount: number = 0;
  subtotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;

  ngOnInit() {
    if (localStorage.getItem('cartCount')) {
      this.cartCount = parseInt(localStorage.getItem('cartCount')) ;
      if(localStorage.cart){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.calculate();
      }
    }
  }


  calculate() {
    this.subtotal =0;
    this.shipping=0;
    for (let p of this.cart.list) {
      console.log(JSON.stringify(p));
      this.subtotal = this.subtotal + (p['price'] * p['buyQty']);
    }
    if (this.subtotal < 1000) {
      this.shipping = 10;
    }
    this.total = this.subtotal + this.shipping + this.tax;
  }

  placeOrder(){
    //alert(JSON.stringify(this.address));
   // alert(JSON.stringify(this.cart));
    

    let res=this.pser.order(this.cart,this.address);
      res.subscribe((data)=>{
       alert("Order Successfully placed");
       localStorage.setItem('cartCount',0+"");
       this.cart.list=[];
       localStorage.setItem('cart',JSON.stringify(this.cart));
       this.router.navigate(['/home']);
      },(err)=>{
        alert("Error While Placing  oder");
      })
  }

}
