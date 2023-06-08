import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-themeitem',
  templateUrl: './themeitem.component.html',
  styleUrls: ['./themeitem.component.css']
})
export class ThemeitemComponent {
  @Input() displayStatus: string = '';
  @Input() themeByCategory: any;
  @Input() newsByCategory: any;
  @ViewChild('appItem') statusItem!: ElementRef;
  public faClose: any = faClose;

  constructor(private render: Renderer2) { }
  public hideThemeItem() {
    this.render.setStyle(this.statusItem.nativeElement, 'display', 'none')
  }
}
