
console.log('Hello World....');
//data type
// number (int,double,float,long),string(char,string),boolean,any,void
//miscell. undefined & null

var a1;

var a2:number;
var a3:string;

var a4:number=10; //forward declartion & defination

console.log('Value of a4 is '+a4);

console.log("Value of a1 is "+a1);
console.log("Value of a2 is "+a2);

console.log("A1 is "+typeof a1);
console.log("A4 is "+typeof a4);
var a5:string=null;
console.log("Value of a5 "+a5);

var a6:number=2.5;
console.log('Value of a6 is '+a6);
var a7:number;
a7=3.5;
console.log("Value of a7 is "+a7);
var a8=12;
var a9='sumit';
var a10;
a9='dfbhh';
//a9=3;
var a10:any;
a10=2.5;
console.log("Value of a10 is "+a10);
a10='Sumit';
console.log("Value of a10 is "+a10);

// operator
// arithmatic(+,-,/,*,%),assignment(=),logical(&& ,||,!=,==,>=,<=),increment(++,--), decrement,relation,bitwise(&,|,!,^,<<,>>),
//post/pre,equality
//ternary ,conditional 
/*

*/

var res=2<4?'Hi':'Bye';
console.log("Value of Res is "+res);

//type assertion
//pre requestic
// that variable should be 'any' type
// we can implement type assertion in 2 way
// 1 angle bracket
// 2 as syntax
var strres:any;
var str1=6;
var temp=(<string> strres);
// temp.

//as syntax

var temp2= (strres as string);
// temp2.
// (strres as string).
 strres=(strres as string);
 
 strres=3;
 console.log("value of strres "+strres);
 strres='sumit';
console.log("value of strres "+strres);














