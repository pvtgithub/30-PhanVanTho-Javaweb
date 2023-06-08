import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-main-admin',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainAdminComponent {
constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#myTable').DataTable();
    });
  }
}
