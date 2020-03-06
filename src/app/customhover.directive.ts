import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customdirective]'
})
export class CustomhoverDirective {

  constructor(private el : ElementRef) { }



@HostListener('mouseenter') onMouseEnter(){
  this.focusColor("green");
}
@HostListener('mouseleave') onMouseLeave(){
  this.focusColor("yellow");
}

public focusColor(color){
  this.el.nativeElement.style.backgroundColor = color;

}
}