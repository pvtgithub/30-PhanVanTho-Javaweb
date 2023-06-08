import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appMyhover]'
})
export class MyhoverDirective {
  constructor(private el: ElementRef, private render: Renderer2) { }


  @HostListener('mouseenter')
  onMoveEnter() {
    this.render.setStyle(this.el.nativeElement, 'display', 'block')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'display', 'none')
  }
}