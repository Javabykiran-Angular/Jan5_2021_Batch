//annynomous funct
var temp = function () {
    console.log("Funct. without argument & without Return Type");
};
// temp();
var temp1 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp1(3,3));
var temp2 = function (a, b) {
    return (a * b);
};
// Arrow function/fat arrow
var temp3 = function () {
    console.log("Fat Arrow Function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a * b);
};
// console.log("Funct with arg & with Return " + temp4(4,4));
//optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //2
    console.log("Value of b is " + b); //undefined
    console.log("result of addition is " + (a + b)); //NAN
}
// add1(2);
// add1(3,3);
var temp5 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp5(7,3));
//default parameter function
function add2(a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("result of addition is " + (a + b));
}
add2(5);
