import { Component, OnInit } from '@angular/core';
import { AlphaCharCounterPipe } from 'src/app/pipes/alpha-char-counter.pipe';

@Component({
    selector: 'app-custom-pipes',
    templateUrl: './custom-pipes.component.html'
})
export class CustomPipesComponent implements OnInit {

    base = 2;
    exponent = 4;

    inputText = 'some random characters 12345';
    characterCount: number;

    constructor(private alphaCharCounter: AlphaCharCounterPipe) { }

    public ngOnInit(): void {
        this.countAlphaChars();
    }

    public countAlphaChars(): void {
        this.characterCount = this.alphaCharCounter.transform(this.inputText);
    }

}
