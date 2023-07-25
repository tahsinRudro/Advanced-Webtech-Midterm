import { Module } from "@nestjs/common";
import { productService } from "./product.service";
import { ProductController } from "./product.controller";
import{UserEntity} from 'src/product/registration.entity';
import { TypeOrmModule } from "@nestjs/typeorm/dist";



@Module({

    imports : [TypeOrmModule.forFeature([UserEntity])],
    controllers : [ProductController],
    providers : [productService]

})
export class productModule{}