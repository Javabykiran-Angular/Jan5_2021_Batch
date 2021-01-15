"use strict";
exports.__esModule = true;
exports.AngularClass = void 0;
var AngularClass = /** @class */ (function () {
    function AngularClass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    AngularClass.prototype.display = function () {
        console.log("\n            First Name :: " + this.fname + "\n            last name ::  " + this.lname + "\n            Id ::         " + this.id + "\n        ");
    };
    return AngularClass;
}());
exports.AngularClass = AngularClass;
