import { Injectable } from '@angular/core';
import { Product } from './products/product';
import{HttpClient} from '@angular/common/http'; 
import { Constants } from './utils/app.constants';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpSer:HttpClient) { }

  saveProduct(product:Product){
    const fd=new FormData();
    for ( var key in product ) {
      fd.append(key, product[key]);
  }
  
    return this.httpSer.post(Constants.API_URL+"products",fd);
  }

  getCategories(){
    return this.httpSer.get(Constants.API_URL+"products/categories");
  }
  getSubCategories(){
    return this.httpSer.get(Constants.API_URL+"products/subcategories");
  }

  getAllProducts(){
    return this.httpSer.get(Constants.API_URL+"products");
  }

  getProductById(productId){
   return this.httpSer.get(Constants.API_URL+"products/"+productId);
  }

  order(cart:any,address:any){
    
    let tr={};
    tr['product']=cart.list;
    tr['address']=address;
    tr['sessionToken']=localStorage.getItem('sessionToken');
//alert(JSON.stringify(tr));
    return this.httpSer.post(Constants.API_URL+"order",tr);
  }
}
