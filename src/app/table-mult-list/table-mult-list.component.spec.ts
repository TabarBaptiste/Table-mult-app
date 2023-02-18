import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultListComponent } from './table-mult-list.component';

describe('TableMultListComponent', () => {
  let component: TableMultListComponent;
  let fixture: ComponentFixture<TableMultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
