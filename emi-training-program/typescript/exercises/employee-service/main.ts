import { EmployeeService } from './employee-service';

let employeeService = new EmployeeService();

employeeService.deleteEmployee(2);

let employeeUpdate = {
    id: 1,
    name: 'Stuart',
    designation: 'UI Developer',
    department: 'Soft Eng',
    gender: 'Male'
};

employeeService.updateEmployee(employeeUpdate);

employeeService.addEmployee('Jane', 'QA Engineer', 'Soft Eng', 'Female');

console.log(employeeService.getEmployeeCountByGender('female'));

employeeService.displayEmployees();
