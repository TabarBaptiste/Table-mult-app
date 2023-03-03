// Importation des dépendances nécessaires pour les tests
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importation du composant à tester
import { PageTableMultComponent } from './page-table-mult.component';

describe('PageTableMultComponent', () => {
  // Déclaration des variables pour le composant et le fixture
  let component: PageTableMultComponent;
  let fixture: ComponentFixture<PageTableMultComponent>;

  beforeEach(async () => {
    // Configuration du module de test pour déclarer le composant à tester
    await TestBed.configureTestingModule({
      declarations: [ PageTableMultComponent ]
    })
    .compileComponents();

    // Création d'une instance du composant à tester
    fixture = TestBed.createComponent(PageTableMultComponent);
    component = fixture.componentInstance;

    // Exécution de la première détection de changement pour initialiser le composant
    fixture.detectChanges();
  });

  // Test de création du composant
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
