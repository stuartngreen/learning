import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponentCalc'
})
export class ExponentCalcPipe implements PipeTransform {

    transform(value: number, exponent?: number): number {
        if (isNaN(exponent)) {
            return value;
        }
        return Math.pow(value, exponent);
    }

}
