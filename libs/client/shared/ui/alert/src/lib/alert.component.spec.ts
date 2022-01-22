import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskAlertComponent } from './alert.component';

describe('MskAlertComponent', () => {
  let component: MskAlertComponent;
  let fixture: ComponentFixture<MskAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
