
export class Department{
    private role:string;

    constructor(role:string){
        this.role=role;
    }

    getRole(){
        return this.role;
    }

     setRole(role:string){
        this.role=role;
    }


}