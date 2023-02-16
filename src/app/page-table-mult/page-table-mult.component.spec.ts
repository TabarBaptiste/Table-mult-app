import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableMultComponent } from './page-table-mult.component';

describe('PageTableMultComponent', () => {
  let component: PageTableMultComponent;
  let fixture: ComponentFixture<PageTableMultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTableMultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTableMultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
