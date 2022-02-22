import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskPasswordStrengthMeterComponent } from './password-strength-meter.component';

describe('MskPasswordStrengthMeterComponent', () => {
  let component: MskPasswordStrengthMeterComponent;
  let fixture: ComponentFixture<MskPasswordStrengthMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskPasswordStrengthMeterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskPasswordStrengthMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
