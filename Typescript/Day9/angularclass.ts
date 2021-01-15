export class AngularClass{
        
    constructor(private fname:string,public lname:string,private id:number){
        
    }

    display(){
        console.log(`
            First Name :: ${this.fname}
            last name ::  ${this.lname}
            Id ::         ${this.id}
        `);
    }


}