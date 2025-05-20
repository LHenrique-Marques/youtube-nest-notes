import { randomUUID } from "crypto";

interface UserSchema{
    email : String;
    password : String;
    name : String;
    createdAt?: Date;
}


export class User{
    props: UserSchema;
    _id: String;

    constructor(props: UserSchema, id?: string){
        this.props = props;
        this._id = id || randomUUID();
    }
}