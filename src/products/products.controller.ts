import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { title } from "process";
import { ProductsService } from "./product.service";
import { Product } from "./products.model";

@Controller('products')
export  class ProductsController{
    constructor(private readonly productService: ProductsService){}
  @Post()  
  addProduct(
      @Body('title')prodTitle:string,
      @Body('description')prodDesc:string,
      @Body('price')prodPrice:number,):any{
        console.log(title);
    return  this.productService.insertProduct(prodTitle,prodDesc,prodPrice);
    
  }

  @Get()
  getAllProducts(){
      return this.productService.getAllProducts();
  }

   @Get(':id')
  getProduct(@Param('id')productId){
    return this.productService.getProduct(productId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id')productId,  
  @Body('title')prodTitle:string,
  @Body('description')prodDesc:string,
  @Body('price')prodPrice:number){
      return this.productService.updateProduct(productId,prodTitle,prodDesc,prodPrice);
  }

  @Delete(':id')
 deleteProduct(@Param('id')productId){
   return this.productService.deleteProduct(productId);
 }

}