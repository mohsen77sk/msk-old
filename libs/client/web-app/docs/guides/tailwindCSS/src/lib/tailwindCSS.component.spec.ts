import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tailwindCSSComponent } from './tailwindCSS.component';

describe('tailwindCSSComponent', () => {
  let component: tailwindCSSComponent;
  let fixture: ComponentFixture<tailwindCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tailwindCSSComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(tailwindCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
