import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentThemingComponent } from './component-theming.component';

describe('ComponentThemingComponent', () => {
  let component: ComponentThemingComponent;
  let fixture: ComponentFixture<ComponentThemingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentThemingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
