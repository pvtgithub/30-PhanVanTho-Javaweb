import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { faClock, faHome, faList, faLocation, faSearch, faUser, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public now: Date = new Date();
  public checkAll: boolean = false;
  public getDate: string = '';
  public statusLoginForm: string = 'none';
  public statusLogin!: any;
  public statusDisplay: string = 'none';
  public allCategory: any[] = [];
  public themeByCategory: any[] = [];
  public newsByCategory: any[] = [];

  @Input() colorAll: string = 'gray';
  @ViewChild('loginButton', { read: ElementRef }) loginButton!: any

  ngAfterViewInit() {
    this.statusLogin = this.loginButton.nativeElement
  }

  fa: any = {
    faClock: faClock,
    faLocation: faLocation,
    faSearch: faSearch,
    faUser: faUser,
    faHome: faHome,
    faList: faList,
    faXmark: faXmarkCircle
  }

  constructor(private category: CategoryService, private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
    this.getDate = this.now.toString();
    this.category.getAllCategory().subscribe((data) => {
      this.allCategory = data
    })
  }
  onMouseEnter(id: number, name: string) {
    this.statusDisplay = 'block';
    this.category.getThemeByCategoryId(id).subscribe((data) => {
      this.themeByCategory = data
      this.themeByCategory.push(name)
    })

    this.category.getNewsByCategoryId(id).subscribe((data) => {
      this.newsByCategory = data
    })
  }

  onMouseLeave() {
    this.statusDisplay = 'none';
  }

  setCheckAll() {
    this.checkAll ? this.checkAll = false : this.checkAll = true;
    this.colorAll == 'gray' ? this.colorAll = 'red' : this.colorAll = 'gray';
  }

}
