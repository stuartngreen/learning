import { IElectricityRate } from './electricity-rate.interface';
import { ElectricityRateService } from './electricity-rate.service';

const SURCHARGE_RATE = 0.15;
const SURCHARGE_THRESHOLD = 400;

export class ElectricityBill {
    private electricityRatesThresholds: Array<IElectricityRate>;

    constructor(
        public unitsUsed: number
    ) {
        this.electricityRatesThresholds = new ElectricityRateService().ratesThresholds;
    }

    public addUnits(unitsUsed: number): void {
        this.unitsUsed += unitsUsed;
    }

    public calculateBill(): number {
        let bill = 0;
        
        for (let rate of this.electricityRatesThresholds) {
            if (this.unitsUsed <= rate.upperThreshold) {
                bill += (this.unitsUsed - rate.lowerThreshold) * rate.chargePerUnit;
                break;
            }
            else {
                bill += (rate.upperThreshold - rate.lowerThreshold) * rate.chargePerUnit;
            }
        }

        if (bill > SURCHARGE_THRESHOLD) {
            bill += bill * SURCHARGE_RATE;
        }

        return bill;
    }
}
