import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[];

  constructor(private prodSer:ProductsService,private router: Router) { 
    this.getAllProducts();
  }

  getAllProducts(){
    let res= this.prodSer.getAllProducts();
    res.subscribe((data)=>{
      this.products = data as any[];
    },(err)=>{
      alert("Error While Displaying Product List");
    })
  }


  viewProductDetails(productId:number){
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "productId": productId
      }
  };

    this.router.navigate(['/productdetails'],navigationExtras);
  }

  ngOnInit() {
    this.getAllProducts();
  }

}
