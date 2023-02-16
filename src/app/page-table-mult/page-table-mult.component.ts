import { Component } from '@angular/core';

@Component({
  selector: 'app-page-table-mult',
  templateUrl: './page-table-mult.component.html',
  styleUrls: ['./page-table-mult.component.css']
})
export class PageTableMultComponent {

  n: number = 2;

  updateN(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.n = +inputElement.value;
  }

}
