import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PTarjeta } from './p-tarjeta';

describe('PTarjeta', () => {
  let component: PTarjeta;
  let fixture: ComponentFixture<PTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PTarjeta],
    }).compileComponents();

    fixture = TestBed.createComponent(PTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
