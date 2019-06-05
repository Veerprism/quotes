import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBestquote]'
})
export class BestquoteDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#97befc";
  }

}
