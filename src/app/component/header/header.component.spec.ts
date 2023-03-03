// Importation des modules nécessaires pour les tests unitaires
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importation du composant HeaderComponent à tester
import { HeaderComponent } from './header.component';

// Bloc de tests unitaires pour le composant HeaderComponent
describe('HeaderComponent', () => {
  // Déclaration des variables utilisées dans le bloc de tests unitaires
  let component: HeaderComponent; // le composant HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>; // le fixture associé au composant HeaderComponent

  // Configuration du bloc de tests unitaires avant chaque test
  beforeEach(async () => {
    // Configuration du TestBed pour les tests unitaires
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ] // déclaration du composant HeaderComponent pour les tests
    })
    .compileComponents(); // compilation du composant

    // Création de la fixture associée au composant HeaderComponent
    fixture = TestBed.createComponent(HeaderComponent);

    // Récupération de l'instance du composant HeaderComponent
    component = fixture.componentInstance;

    // Déclenche la détection de changements pour mettre à jour la vue du composant
    fixture.detectChanges();
  });

  // Test unitaire pour vérifier que le composant HeaderComponent a été créé
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
