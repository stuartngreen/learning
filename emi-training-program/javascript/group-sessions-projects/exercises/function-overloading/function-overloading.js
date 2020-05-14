// Function overloading example
var Employee = /** @class */ (function () {
    function Employee(employeeCode, idNumber, firstName) {
        this.employeeCode = employeeCode;
        this.idNumber = idNumber;
        this.firstName = firstName;
    }
    return Employee;
}());
var employees = [
    new Employee(123, 8001185050012, 'Stuart'),
    new Employee(456, 6901185050014, 'John'),
    new Employee(789, 9001185050016, 'Jane')
];
// Get employees by employee code or name
function getEmployees(employees, identifier) {
    if (typeof identifier === 'number') {
        return employees.filter(function (emp) { return emp.employeeCode === identifier; });
    }
    else if (typeof identifier === 'string') {
        return employees.filter(function (emp) { return emp.firstName.toLowerCase() === identifier.toLowerCase(); });
    }
    throw 'Invalid identifier provided.';
}
console.log(getEmployees(employees, 123));
console.log(getEmployees(employees, 'stuart'));
