// Function overloading example
class Employee {
    constructor(
        public employeeCode: number,
        public idNumber: number,
        public firstName: string
    ){
    }
}

let employees: Array<Employee> = [
    new Employee(123, 8001185050012, 'Stuart'),
    new Employee(456, 6901185050014, 'John'),
    new Employee(789, 9001185050016, 'Jane')
]

// Get employees by employee code or name
function getEmployees(employees: Array<Employee>, identifier: number | string): Array<Employee> {

    if (typeof identifier === 'number') {
        return employees.filter(emp => emp.employeeCode === identifier);
    }
    else if (typeof identifier === 'string') {
        return employees.filter(emp => emp.firstName.toLowerCase() === identifier.toLowerCase());
    }
    throw 'Invalid identifier provided.';

}

console.log(getEmployees(employees, 123));
console.log(getEmployees(employees, 'stuart'));
