import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor(private el: ElementRef) { }
  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY >= 500) {
      this.el.nativeElement.style.display = 'block'
    } else {
      this.el.nativeElement.style.display = 'none'
    }
  }
}
