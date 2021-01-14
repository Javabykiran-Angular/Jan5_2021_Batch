"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(myfname, mylname, id) {
        this.fname = myfname;
        this.lname = mylname;
        this.id = id;
    }
    MyClass.prototype.display = function () {
        console.log("\n        ----------Details-----------\n            First Name :: " + this.fname + "\n            Last Name :: " + this.lname + "\n            ID        :: " + this.id + "\n        ");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
// var obj=new MyClass('Sumit','Raokhande',9);
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
