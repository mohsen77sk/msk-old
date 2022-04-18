import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskSpinnerComponent } from './spinner.component';

describe('MskSpinnerComponent', () => {
  let component: MskSpinnerComponent;
  let fixture: ComponentFixture<MskSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
