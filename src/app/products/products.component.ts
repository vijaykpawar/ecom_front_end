import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:any={};
  category:any[]=[];
  subCategory:any[]=[];
  constructor(private productService:ProductsService) { }
  ngOnInit() {
    let cat=this.productService.getCategories();
    let subcat=this.productService.getSubCategories();
    cat.subscribe((data)=>{
      this.category= data as any[];
     },(err)=>{
       alert("Error While fetching Category");
     });
    
     subcat.subscribe((data)=>{
      this.subCategory= data as any[];
     },(err)=>{
      alert("Error While fetching SubCategory");
     });
  }

  onFileSelected(files: File[] , fileNum:number){
    console.log(files);
    this.product["image"+fileNum+"File"]=files[0];
  }

  saveProduct(product:Product){
    try {
      let res=this.productService.saveProduct(product);
      res.subscribe((data)=>{
       alert("Saved Successfully");
      
      },(err)=>{
        alert("Error While Saving Product");
      })
    } catch (error) {
      alert(error);
    }
  
  }

}
