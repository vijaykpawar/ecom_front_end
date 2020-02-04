export class Product {
    private productId:number;
private name:string;
private desc:string;
private quantity:number;
private price:number;
private categoryId:number;
private subcategoryId:number;
private image1File:File;
private image2File:File;
private image3File:File;
private image4File:File;
private image1:string;
private image2:string;
private image3:string;
private image4:string;
constructor(
    name:string,
    desc:string,
    quantity:number,
    price:number,
    categoryId:number,
    subcategoryId:number,
    productId:number,
    image1File:File,
    image2File:File,
    image3File:File,
    image4File:File,
     image1:string,
 image2:string,
 image3:string,
 image4:string
){
this.name=name;
this.desc=desc;
this.quantity=quantity;
this.price=price;
this.categoryId=categoryId;
this.subcategoryId=subcategoryId;
this.productId=productId;
this.image1File=image1File;
this.image2File=image2File;
this.image3File=image3File;
this.image4File=image4File;
this.image1=image1;
this.image2=image2;
this.image3=image3;
this.image4=image4;
};


}