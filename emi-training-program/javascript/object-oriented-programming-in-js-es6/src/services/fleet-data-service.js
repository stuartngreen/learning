import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { DataError } from './data-error.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    getCarByLicense(license) {
        return this.cars.find(car => {
            return car.license === license;
        });
    }

    getCarsSortedByLicense() {
        return this.cars.sort((car1, car2) => {
            if (car1.license < car2.license) {
                return -1;
            }
            if (car1.license > car2.license) {
                return 1;
            }
            return 0;
        });
    }

    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

    validateCarData(car) {
        let requiredProps = ['license', 'model', 'latLong', 'miles', 'make'];
        let hasErrors = false;

        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`Invalid field ${ field }`, car));
                hasErrors = true;
            }
        }

        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('Invalid mileage', car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    validateDroneData(drone) {
        let requiredProps = ['license', 'model', 'latLong', 'airTimeHours', 'base'];
        let hasErrors = false;

        for (let field of requiredProps) {
            if (!drone[field]) {
                this.errors.push(new DataError(`Invalid field ${ field }`, drone));
                hasErrors = true;
            }
        }

        if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
            this.errors.push(new DataError('Invalid airtime hours', drone));
            hasErrors = true;
        }

        return !hasErrors;
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch(e) {
            this.errors.push(new DataError('Error loading car', car));
        }
        return null;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch(e) {
            this.errors.push(new DataError('Error loading drone', drone));
        }
        return null;
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch(data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        if (car) {
                            this.cars.push(car);
                        }
                    }
                    else {
                        let e = new DataError('Invalid car data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    if (this.validateDroneData(data)) {
                        let drone = this.loadDrone(data);
                        if (drone) {
                            this.drones.push(drone);
                        }
                    }
                    else {
                        let e = new DataError('Invalid drone data', data);
                        this.errors.push(e);
                    }
                    break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

}