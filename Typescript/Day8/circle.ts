import {Shape} from './shape';

export class Circle extends Shape {
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    display(){
        console.log(`
        -----Area of Circle -------
            Whose radius is ${this.radius}
            Area is ${this.area}
        `);
    }
    
    MyArea(){
    this.area=3.14*this.radius*this.radius;
    }

}