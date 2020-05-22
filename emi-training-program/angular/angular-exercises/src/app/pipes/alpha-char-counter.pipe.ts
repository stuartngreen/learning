import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alphaCharCounter'
})
export class AlphaCharCounterPipe implements PipeTransform {

    transform(text: string): number {
        let count = 0;
        for (const char of text.toLowerCase()) {
            if (char.match(/[a-z]/)) {
                count++;
            }
        }
        return count;
    }

}
