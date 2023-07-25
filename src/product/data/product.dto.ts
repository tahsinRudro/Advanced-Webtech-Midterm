import { IsString, IsNotEmpty } from 'class-validator';

export class product {
  
  productId: string;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  @IsString()
  sellerName: string;

  @IsNotEmpty()
  @IsString()
  prize: string;
}
