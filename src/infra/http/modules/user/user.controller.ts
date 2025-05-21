import { Body, Controller,Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase";
import { createUserBody } from "./dtos/createUserBody";

@Controller('users')
export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase){}
    @Post()
    async createPost(@Body() body: createUserBody){
        const {email,name,password} = body
        const user = await this.createUserUseCase.execute({email,name,password});
        return user;
    }
}