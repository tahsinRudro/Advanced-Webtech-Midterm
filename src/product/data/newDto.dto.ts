import {IsString} from 'class-validator';
export class product
{
	@IsString()
	productId: string;

    @IsString()
    productName: string;

    @IsString()
    sellerName: string;

    @IsString()
    prize: string;
}