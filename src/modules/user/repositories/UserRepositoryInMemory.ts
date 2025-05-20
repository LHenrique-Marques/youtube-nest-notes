import { UserRepository } from "./UserRepository";
import { User } from "../entities/User";


export class UserRepositoryInMemory implements UserRepository{

    public users: User[] = []

    async create(user:User):Promise<void>{
        this.users.push(user);
    }
}