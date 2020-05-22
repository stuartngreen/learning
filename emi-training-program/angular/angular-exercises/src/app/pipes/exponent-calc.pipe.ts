import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentCalc'
})
export class ExponentCalcPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
