import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  constructor() {

    console.log("directive is working")
   }

  @Input('highlighted')
  Highlighted=false;

  @Output()
  toggleHighlight=new EventEmitter<boolean>();


  //  @HostBinding('className')
  //  get cssclass(){
  //   return 'highlighted';
  //  }
 
  // @HostBinding('class.highlighted')
  //  get cssclass(){
  //   return 'true'
  //  }

  //  @HostBinding('style.border')
  //  get cssclass(){
  //   return '1px solid lightgreen'
  //  }

  @HostBinding('class.highlighted')
   get cssclass(){
    return this.Highlighted 
   }

  //  @HostBinding('attr.disabled')
  //  get disabled(){
  //   return true 
  //  }

@HostListener('mouseover',['$event'])
mouseover($event:any){
  // console.log($event)
  this.Highlighted = true;
  this.toggleHighlight.emit(this.Highlighted);
}

@HostListener('mouseleave')
mouseleave(){
  this.Highlighted = false;
  this.toggleHighlight.emit(this.Highlighted);
}

toggle(){
  this.Highlighted =!this.Highlighted;
  this.toggleHighlight.emit(this.Highlighted);
}

}
