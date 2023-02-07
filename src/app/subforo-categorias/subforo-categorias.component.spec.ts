import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubforoCategoriasComponent } from './subforo-categorias.component';

describe('SubforoCategoriasComponent', () => {
  let component: SubforoCategoriasComponent;
  let fixture: ComponentFixture<SubforoCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubforoCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubforoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
