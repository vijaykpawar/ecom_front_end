import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }
  cart: any = {};
  cartCount: number = 0;
  subtotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;
  ngOnInit() {
    if (localStorage.getItem('cartCount')) {
      this.cartCount = parseInt(localStorage.getItem('cartCount')) + 1;
      if(localStorage.cart){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.calculate();
      }
    }
  }

  removeFromCart(i: number) {

    this.cart.list.splice(i, 1);
    this.cartCount = this.cart.list.length;
    localStorage.setItem('cartCount', this.cartCount + "");
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculate();

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

  checkout(){
    if(localStorage.getItem('loggedIn')=='true'){
      this.router.navigate(['/checkout']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
