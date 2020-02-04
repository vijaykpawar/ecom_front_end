import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products:any[];
  
  constructor(private prodSer:ProductsService) {
  }

  getAllProducts(){
    let res= this.prodSer.getAllProducts();
       res.subscribe((data)=>{
        this.products  = data as any[];
           
    },(err)=>{
      alert("Error While Saving Product");
    })

  }

  

  ngOnInit() {
    this.getAllProducts();
  }


}
