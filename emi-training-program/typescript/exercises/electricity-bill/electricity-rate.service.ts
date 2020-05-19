import { IElectricityRate } from './electricity-rate.interface';

export class ElectricityRateService {
    public ratesThresholds: Array<IElectricityRate>;

    constructor() {
        this.ratesThresholds = this.getRates()
    }

    public getRates(): Array<IElectricityRate> {
        return [
            {
                lowerThreshold: 0,
                upperThreshold: 199,
                chargePerUnit: 1.2
            },
            {
                lowerThreshold: 200,
                upperThreshold: 399,
                chargePerUnit: 1.5
            },
            {
                lowerThreshold: 400,
                upperThreshold: 599,
                chargePerUnit: 1.8
            },
            {
                lowerThreshold: 600,
                upperThreshold: Infinity,
                chargePerUnit: 2
            }
        ]
    }
}
