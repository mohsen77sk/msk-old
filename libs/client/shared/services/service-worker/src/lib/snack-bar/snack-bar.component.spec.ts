import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskServiceWorkerSnackBarComponent } from './snack-bar.component';

describe('MskServiceWorkerSnackBarComponent', () => {
  let component: MskServiceWorkerSnackBarComponent;
  let fixture: ComponentFixture<MskServiceWorkerSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskServiceWorkerSnackBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskServiceWorkerSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
