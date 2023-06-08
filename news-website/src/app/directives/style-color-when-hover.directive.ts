import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleColorWhenHover]'
})
export class StyleColorWhenHoverDirective {

  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.style.color = 'black'
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'rgb(29, 140, 140)'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black'
  }
}
