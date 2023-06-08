import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStyleColor]'
})
export class StyleColorDirective {
  @Input() appStyleColor = '';
  constructor(private el: ElementRef) { }

  public ngOnInit() {
    this.el.nativeElement.style.color = this.appStyleColor
  }

}
