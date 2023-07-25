import { Body, Controller, Get, Put, Delete, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { productService } from "./product.service";
import { product } from "./data/product.dto";
import { registration_Dto } from "./registration.dto";
import { login_Dto } from "./login_dto";

//import { discount } from "./product.service";

@Controller("customer")
export class ProductController{
    
    constructor(private productService : productService){
        

    }
    

    @Get("/findproduct")
    getAllProducts() : product[]{
        return this.productService.findAllProducts();
    }


    @Put("/update")
    @UsePipes(new ValidationPipe())
    updateProducts(@Body() product : product) : string{
        return this.productService.updateProductService(product);
    }


    @Delete("/delete/:productId")
    deleteProducts(@Param("productId") productId : string) : string{
        return this.productService.deleteProductService(productId);
    }


    
    @Post("/add")
    @UsePipes(new ValidationPipe())
    addProducts(@Body() product : product) : string{
        return this.productService.addProductService(product);
    }
    




    @Post('/registration')

  @UsePipes(new ValidationPipe())

  async registrationuser(@Body() registration_dto:registration_Dto ):Promise<any>{

   

      return await this.productService.registrationuser(registration_dto);

   

  }



  @Post('/login')

  @UsePipes(new ValidationPipe())

  login(@Body() loginDto: login_Dto): any {

 

    return this.productService.login(loginDto);

  }



  @Post("/buy/:productId")
  buyProduct(@Param("productId") productId: string): string {
    // Add the selected product to the cart
    const addToCartMessage = this.productService.addToCart(productId);
    if (addToCartMessage === "Product added to cart") {
      // Process the payment
      const paymentMessage = this.productService.processPayment();
      return paymentMessage;
    } else {
      return addToCartMessage;
    }
  }


  @Post("/addToCart/:productId")
  addToCart(@Param("productId") productId: string): string {
    const addToCartMessage = this.productService.addToCart(productId);
    return addToCartMessage;
  }

  @Delete("/removeFromCart/:productId")
  removeFromCart(@Param("productId") productId: string): string {
    const removeFromCartMessage = this.productService.removeFromCart(productId);
    return removeFromCartMessage;
  }



  @Get("/viewCart")
  viewCartProducts(): product[] {
    return this.productService.getCartProducts();
  }
}






   

  
  

    
