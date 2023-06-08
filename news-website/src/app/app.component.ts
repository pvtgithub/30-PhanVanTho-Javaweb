import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean = false;
  title = 'news-website';

  constructor(private route: Router){}
  public onTop: any = faArrowsUpToLine

  goToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  ngOnInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Trang web đã load xong
        this.isLoading = true
      }else{
        this.isLoading = false
      }
    });
  }
}
