"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, role) {
        this.lname = lname;
        this.fname = fname;
        this.salary = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n       ------Employee Details---------\n       First Name :: " + this.fname + "\n       Last Name :: " + this.lname + "\n       Salary ::    " + this.salary + "\n       Role ::      " + this.dept.getRole() + "\n       ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
