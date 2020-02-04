import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  

  constructor(private productService:ProductsService,private activatedRoute: ActivatedRoute, private nav:NavbarService) { }

  product:any={};

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const prouctId = params['productId'];
      console.log(prouctId);
      this.getProductDetails(prouctId);
    });
  }


  addToCart(product:any){
   this.nav.addToCart(product);
  }

  getProductDetails(productId:number){
      
    try {
      let res=this.productService.getProductById(productId);
      res.subscribe((data)=>{
        if(data !=null && data!=""){
      
        this.product=data;  
        this.product.buyQty=1;
        }else{
          alert("Please select valid product");
        }
      
      },(err)=>{
        alert("Error While calling REST service");
      })
    } catch (error) {
      alert(error);
    }
  }
}
