import { ElectricityBill } from './electricity-bill';

export class Customer {
    public electricityBill: ElectricityBill;

    constructor(
        public id: number,
        public name: string,
        public unitsUsed: number = 0
    ) {
        this.electricityBill = new ElectricityBill(unitsUsed);
    }
}
