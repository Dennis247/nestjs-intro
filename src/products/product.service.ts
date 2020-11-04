import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";



@Injectable()
export class ProductsService{
  
private  products :Product[] =[];
  insertProduct(title:string,description:string,price:number){
      const prodId = Math.random().toString();
    const newProduct =new Product(prodId,title,description,price);
    console.log(newProduct);
    this.products.push(newProduct);
    return {id:prodId};
  }

  getProduct(productId:string){
    return this.findProduct(productId)[0];
  }

  updateProduct(id:string,title:string,description:string,price:number){
     const existingPRoduct = this.findProduct(id)[0];
     const  productIndex  =  this.findProduct(id)[1];
     const updateProduct = {...existingPRoduct};
     if(title){
      updateProduct.title = title;
     }
     if(description){
      updateProduct.description = description;
     }
     if(price){
      updateProduct.price = price;
     }
     this.products[productIndex] = updateProduct;
     return updateProduct;

  }

  deleteProduct(id:string){
    const  productIndex  =  this.findProduct(id)[1];
    this.products.splice(productIndex,1);
    return ("product deleted sucessfully");
  }
  

  getAllProducts():Product[]{
      return this.products.slice();
  }

  private findProduct(productId:string):[Product,number]{
    const productIndex = this.products.findIndex(x=>x.id== productId);
    const product =this.products[productIndex];
    if(!product){
      throw  new NotFoundException('Could not find product');
     }
     return [product,productIndex];
  }
   
 
}