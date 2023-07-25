import { Injectable } from "@nestjs/common";
import { product } from "./data/product.dto";
import { v4 as uuidv4 } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UserEntity } from 'src/product/registration.entity';

import { registration_Dto } from './registration.dto';
import { login_Dto } from "./login_dto";
import { Discount } from "./discount.dto";






@Injectable()
export class productService {
    public products : product[] = [];
    public cart: product[] = [];


   
    getCartProducts(): product[] {
      return this.cart;
    }
  
   
   
   
    // Add a method to add products to the cart
  addToCart(productId: string): string {
    const product = this.products.find((product) => product.productId === productId);
    if (product) {
      this.cart.push(product);
      return "Product added to cart";
    } else {
      return "Product not found";
    }
  }

  // Add a method to remove products from the cart
  removeFromCart(productId: string): string {
    const index = this.cart.findIndex((product) => product.productId === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      return "Product removed from cart";
    } else {
      return "Product not found in cart";
    }
  }


  // Add a method to process the payment
  processPayment(): string {
    // Logic to process the payment
    // You can use payment gateways or any other payment processing mechanism here
    // After successful payment, you can empty the cart
    this.cart = [];
    return "order received successfully!!!\n Thank you for buy our product!";
  }

   
    addProductService(product : product) : string {
        product.productId = uuidv4();
        this.products.push(product);
        return "product is added successfully";
    }


    updateProductService(product : product) : string {
        let index = this.products.findIndex((currentProduct)=>{
            return currentProduct.productId == product.productId;
        });
        this.products[index] = product;
        return "product updated successfully";
    }


    deleteProductService(productId : string) : string{
        this.products = this.products.filter((product)=>{
            return product.productId != productId;
        });
        return "product deleted";
    }


    findAllProducts(): product[] {
        return this.products;
    }



    constructor(

        @InjectRepository(UserEntity)

        private userRepo:

        Repository<UserEntity>,){}

       

        //registration user....

        async registrationuser(registration_dtoo: registration_Dto): Promise<any> {

          const User = await this.userRepo.findOne({ where: { name: registration_dtoo.name } });

     

          if (User) {

           

            return 'User exists!';

          } else {

            //const hashedPassword = await bcrypt.hash(registration_dtoo.password, 10);

            //registration_dtoo.password = hashedPassword;

            return this.userRepo.save(registration_dtoo);

          }

        }



        //login.....

      async login(login_dto: login_Dto): Promise<string> {

        const user = await this.userRepo.findOne({ where: { name: login_dto.name } });

   

        if (!user) {

          return 'Login unsuccessful: User not found';

        }

   

        if (user.password !== login_dto.password) {

          return 'Login unsuccessful: Incorrect password';

        }

       

        return 'Login successful';




      }
    }



        


    




