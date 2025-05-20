import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";
interface UserSchema{
    email : String;
    password : String;
    name : String;
    createdAt: Date;
}


export class User{
    props: UserSchema;
    _id: String;

    constructor(props: Replace<UserSchema,{ createdAt?: Date }>, id?: String){
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    }
    get id(): String{
        return this._id;
    }
    get email(): String{
        return this.props.email;
    }
    set email(email: string){
        this.props.email = email;
    }
    get password(): String{
        return this.props.password;
    }
    set password(password: String){
        this.props.password = password;
    }
    get name(): String{
        return this.props.name;
    }
    set name(name: String){
        this.props.name = name;
    }
    get createdAt(): String{
        return this.createdAt;
    }
}