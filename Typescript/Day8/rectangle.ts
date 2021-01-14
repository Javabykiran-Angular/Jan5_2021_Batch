
import {Shape} from './shape';

export class Rectangle extends Shape{
   length:number;
   breadth:number;
   area:number;
   
constructor(l:number,b:number){
    super();
    this.length=l;
    this.breadth=b;
    this.area=0;
}

   display(){
       console.log(`
       ------Area of Reactangle----
       Whose length is ${this.length}
       breadth is ${this.breadth}
       And Area is ${this.area}
       `);
   }

   
    MyArea(){
    this.area=this.length*this.breadth;
    }
}