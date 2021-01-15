import { Employee } from "./employee";
import {Department} from './department';
export class EmployeeDetails implements Employee {
    fname: string;
    lname: string;
    salary:number;
    dept:Department;

    constructor(fname:string,lname:string,salary:number,role:string){
        this.lname=lname;
        this.fname=fname;
        this.salary=salary;
        this.dept=new Department(role);
    }

    display() {
       console.log(`
       ------Employee Details---------
       First Name :: ${this.fname}
       Last Name :: ${this.lname}
       Salary ::    ${this.salary}
       Role ::      ${this.dept.getRole()}
       `);
    }

}
