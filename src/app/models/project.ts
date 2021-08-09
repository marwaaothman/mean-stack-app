import { User } from "./user";
export class Project {
    _id:String;
    title: String ;
    budget: Number ;
    Start_Date: Date;
    End_Date: Date ;
    description: String;
    file:String;
    manager: User;
}
