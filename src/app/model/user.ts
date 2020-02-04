export class User{

    private username:string;
    private password:string;
    private firstName:string;
    private lastName:string;
    private email:string;
    private mobile:string;

    constructor(username:string,password:string,firstName:string,lastName:string,email:string,mobile:string){
        this.username=username;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.mobile=mobile;
    }

}