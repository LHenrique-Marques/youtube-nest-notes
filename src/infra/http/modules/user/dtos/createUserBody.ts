import {IsEmail,IsNotEmpty,IsString} from "class-validator";
export class createUserBody{
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email : string;
    @IsString()
    @IsNotEmpty()
    name : string;
    @IsString()
    @IsNotEmpty()
    password : string;
}