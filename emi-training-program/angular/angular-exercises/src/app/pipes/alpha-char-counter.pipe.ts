import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphaCharCounter'
})
export class AlphaCharCounterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
