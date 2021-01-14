import {MyClass,add,pi} from './demo1';

var obj=new MyClass('Java','ByKiran',8);
obj.display();

console.log(`
-------------Function Call-----------
    Addition is ${add(2,3)}
`);
console.log("Value of Pi is "+pi);