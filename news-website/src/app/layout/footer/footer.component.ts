import { Component } from '@angular/core';
import { faAd, faEnvelope, faVrCardboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public fa: any = {
    faEmail: faEnvelope,
    faPr: faAd,
    faCardBoard: faVrCardboard,
  }
}
