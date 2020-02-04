import { Injectable } from '@angular/core';
import { p } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  private loggedInStatus=JSON.parse(localStorage.getItem("loggedIn") || 'false');
  constructor() { this.visible = true; 

  }
  
  init(){
    
  }
  
  cart:any={};
  cartCount:number=0;

 addToCart(product:any){
 //  localStorage.getItem()
if(localStorage.getItem('cartCount')){
  this.cartCount=parseInt(localStorage.getItem('cartCount'))+1;  
  this.cart=JSON.parse(localStorage.getItem('cart'));
  this.cart.list.push(product);
}else{
  this.cartCount=this.cartCount+1;
  let arr:any[]=[];
  arr.push(product);
  this.cart['list']=arr;
}
localStorage.setItem('cartCount',""+this.cartCount);
localStorage.setItem('cart',JSON.stringify(this.cart));

}

getCartCount(){
if(localStorage.getItem('cartCount')){
  return localStorage.getItem('cartCount');
}  
  return 0;
}
checkout(){
alert(this.cart);



}

  hide() { this.visible = false; }

  show() { this.visible = true; }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
    localStorage.setItem("loggedIn",value+"");
  }
  isLoggedIn(){
    return JSON.parse(localStorage.getItem("loggedIn") || this.loggedInStatus);
  }
}
