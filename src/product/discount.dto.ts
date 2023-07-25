import{IsNotEmpty, IsString} from "class-validator";




export class Discount{




    @IsNotEmpty({message:"Name should not be empty"})

    @IsString()

    productname:string;




    @IsNotEmpty({message:"discount should not be empty"})

    discount:string;




}