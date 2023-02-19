import { Component } from '@angular/core';

@Component({
  selector: 'app-table-mult-list',
  templateUrl: './table-mult-list.component.html',
  styleUrls: ['./table-mult-list.component.css']
})
export class TableMultListComponent {

  // Tableau des nombres à afficher
  numbers: number[] = [];

  // Nombre de tables à afficher
  numberOfTables = 10;

  // Constructeur de la classe
  constructor() {
    this.updateNumbers(); // Initialise le tableau des nombres
  }

  // Met à jour le tableau des nombres à afficher
  updateNumbers() {
    this.numbers = Array.from({length: this.numberOfTables}, (_, i) => i+1); // Génère le tableau
  }

  // Génère un tableau de nombres allant de 'start' à 'end'
  range(start: number, end: number): number[] {
    return Array.from({length: (end - start + 1)}, (_, i) => start + i); // Génère le tableau
  }

  // Met à jour le nombre de tables à afficher
  updateNumberOfTables(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Récupère l'élément input qui a déclenché l'événement
    this.numberOfTables = +inputElement.value; // Récupère la valeur de l'input et la convertit en nombre
    this.updateNumbers(); // Met à jour le tableau des nombres à afficher
  }
}
