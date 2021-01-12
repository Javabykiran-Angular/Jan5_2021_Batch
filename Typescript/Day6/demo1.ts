var a:number[]=[11,12,13,14,15];
var a1=[11,12,13,14,15];


for(let i=0;i<a.length;i++){
    // console.log(`
    // -------------------------
    //     a[${i}]=${a[i]}
    // `);
}

// console.log("Array Value is "+a);
// console.log("Print array using Join Method "+a.join(' '));
// console.log("Print array using Join Method "+a.join('@'));
//we can insert dynamically value into the array using 2 way

// 1 using LIFO principal=> push & pop
// 2 using splice method

// 1 using push & pop method
var a2:number[]=[];
// a2.push(22);
// console.log(a2);
// a2.push(23);
// console.log(a2);
// a2.push(24);
// console.log(a2);
// var temp=a2.pop();
// console.log(a2);
// console.log("Poped value is "+temp);

// 2 using splice method
var a3=[11,12,13,14];

// a3.splice(2,0,22);
// console.log(a3);
// var temp1=a3.splice(3,1);
// console.log(a3);
// console.log("Temp1 data is "+temp1);
// a3.splice(1,0,33,34,35,36);
// console.log(a3);
// a3.splice(1,2);
// console.log(a3);
// a3.splice(2,1,50);
// console.log(a3);

//slice=> it copied a section of data & returns a new array

var a4=[2,3,4,5,6,7,8,9];
var temp2=a4.slice(2,5);
// console.log("Original data is "+a4);
// console.log("Copied Array "+temp2);

//for each
a4.forEach((myvalue,i)=>{
    console.log(`
        -----------------
        my value is ${myvalue} & whose index is ${i}
    `);
});





