
export class MyClass{

    //property
   private fname:string;
   public lname:string;
   protected id:number;

    constructor(myfname:string,mylname:string,id:number){
        this.fname=myfname;
        this.lname=mylname;
        this.id=id;
    }

    display(){
        console.log(`
        ----------Details-----------
            First Name :: ${this.fname}
            Last Name :: ${this.lname}
            ID        :: ${this.id}
        `);
    }

}

// var obj=new MyClass('Sumit','Raokhande',9);
// obj.display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;

