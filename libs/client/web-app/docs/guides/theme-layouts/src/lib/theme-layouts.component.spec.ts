import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeLayoutsComponent } from './theme-layouts.component';

describe('ThemeLayoutsComponent', () => {
  let component: ThemeLayoutsComponent;
  let fixture: ComponentFixture<ThemeLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeLayoutsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
