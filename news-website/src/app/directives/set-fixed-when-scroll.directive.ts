import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetFixedWhenScroll]'
})
export class SetFixedWhenScrollDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY >= 100) {
      this.render.addClass(this.el.nativeElement, 'fixed_menu')
    } else {
      this.render.removeClass(this.el.nativeElement, 'fixed_menu')
    }
  }
}
