
var a=[2,3,4,5,6];

//map funct. = if u want element by element perform any task or logic in that we use map function

var res=a.map(
    (myvalue)=>{
    return (myvalue*myvalue);
}
)
// console.log("original array "+a);
// console.log("result is "+res);

//rest paramter function

function display(...item:number[]){

    for (let i = 0; i < item.length; i++) {
       console.log(`
       Item value is ${item[i]}
       `);        
    }
}

// display(20,30);
// display(30,31,32,34,45,56);

var a1=[12,'Angular8',true,2.3,3,'Active'];
console.log(a1);



