import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentStructureComponent } from './component-structure.component';

describe('ComponentStructureComponent', () => {
  let component: ComponentStructureComponent;
  let fixture: ComponentFixture<ComponentStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
