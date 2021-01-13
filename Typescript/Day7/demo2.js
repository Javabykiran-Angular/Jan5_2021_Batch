//json object => java script object notation
// it store data in key & value format
//if u want retrive a data u retrive it with the help of key name
var obj = {
    "fname": "Sumit",
    lname: 'Raokhande',
    id: 9
};
// retive a data using dot operator .
// console.log("First name is "+obj.fname);
// console.log("last name is "+obj.lname);
// console.log("ID is "+obj.id);
// retive a data using square operator []
// console.log(`
// -----------------Using Square Operator-----------
//     First name is ${obj['fname']}
//     Last name is ${obj["lname"]}
//     Id is       ${obj['id']}
// `)
//array of object
var arrobj = [
    {
        name: 'Samsung',
        description: "Good Product",
        price: 20000,
        specification: {
            technical: 'core snapdragon 750',
            design: "Good",
            rating: 3
        },
        model: ['note', 'samasung x', 'note pro']
    },
    {
        name: 'Motorolla',
        description: "Best Product",
        price: 25000,
        specification: {
            technical: 'core snapdragon 6505G',
            design: "Good",
            rating: 3
        },
        model: ['Moto G', 'Moto x', 'Moto E']
    },
    {
        name: 'LG',
        description: "Lifes good Product",
        price: 25000,
        specification: {
            technical: 'core snapdragon 750',
            design: "Good",
            rating: 3
        },
        model: ['LG ', 'LG x', 'LG E']
    }
];
// console.log("Prodcut Name "+arrobj[0].name);
// console.log("Prodcut Description "+arrobj[0].description);
// console.log("Prodcut Price "+arrobj[0].price);
for (var i = 0; i < arrobj.length; i++) {
    console.log("------------------------------");
    console.log("Prodcut Name " + arrobj[i].name);
    console.log("Prodcut Description " + arrobj[i].description);
    console.log("Prodcut Price " + arrobj[i].price);
    console.log("Product Specification " + arrobj[i].specification.technical);
    console.log("Product Specification " + arrobj[i].specification.design);
    console.log("Product Specification " + arrobj[i].specification.rating);
    console.log("Prodcut Model " + arrobj[i].model.join("  "));
}
