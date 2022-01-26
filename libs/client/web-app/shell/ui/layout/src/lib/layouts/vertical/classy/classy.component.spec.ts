import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassyComponent } from './classy.component';

describe('ClassyComponent', () => {
  let component: ClassyComponent;
  let fixture: ComponentFixture<ClassyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
