import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor() {

    console.log("directive is working")
   }

}
