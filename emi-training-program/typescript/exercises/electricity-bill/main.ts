import { Customer } from './customer';

const MINIMUM_BILL = 100;
let customer = new Customer(123, 'Stuart');
let amountDue: number;

customer.electricityBill.addUnits(750);

amountDue = customer.electricityBill.calculateBill();

console.log(`Bill amount: ${ amountDue.toFixed(2) }`);

if (amountDue < MINIMUM_BILL) {
    console.log(`Your bill is too small to pay right now (<${ MINIMUM_BILL }).`);
}
