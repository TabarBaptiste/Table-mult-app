import { Component } from '@angular/core';

@Component({
  selector: 'app-table-mult-list',
  templateUrl: './table-mult-list.component.html',
  styleUrls: ['./table-mult-list.component.css']
})
export class TableMultListComponent {
  numbers: number[] = [];
  numberOfTables = 10;

  constructor() {
    this.updateNumbers();
  }

  updateNumbers() {
    this.numbers = Array.from({length: this.numberOfTables}, (_, i) => i+1);
  }

  range(start: number, end: number): number[] {
    return Array.from({length: (end - start + 1)}, (_, i) => start + i);
  }

  updateNumberOfTables(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.numberOfTables = +inputElement.value;
    this.updateNumbers();
  }
}
