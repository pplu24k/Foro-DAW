import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiloPageComponent } from './hilo-page.component';

describe('HiloPageComponent', () => {
  let component: HiloPageComponent;
  let fixture: ComponentFixture<HiloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiloPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
