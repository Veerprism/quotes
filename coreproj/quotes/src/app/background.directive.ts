import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {


    constructor(private eleRef: ElementRef) {
      eleRef.nativeElement.style.background = 'red';
    }



}
