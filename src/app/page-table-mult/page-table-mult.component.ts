import { Component } from '@angular/core';

// Le décorateur @Component permet de définir les métadonnées du composant
@Component({
  selector: 'app-page-table-mult',  // Le sélecteur est utilisé pour déterminer où le composant sera inséré dans le DOM
  templateUrl: './page-table-mult.component.html',  // Le templateUrl est utilisé pour déterminer où se trouve le template du composant
  styleUrls: ['./page-table-mult.component.css']  // Le styleUrls est utilisé pour déterminer où se trouvent les fichiers de styles du composant
})

// La classe PageTableMultComponent contient la logique de notre composant
export class PageTableMultComponent {

  n: number = 2;  // Initialisation de la variable n à 2

  // La fonction updateN est appelée lorsque l'utilisateur modifie la valeur de l'input
  updateN(event: Event) {
    const inputElement = event.target as HTMLInputElement;    // On récupère l'élément input
    this.n = +inputElement.value;    // On convertit la valeur de l'input en nombre et on l'assigne à la variable n
  }

}
