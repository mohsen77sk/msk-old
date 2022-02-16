import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskConfirmationDialogComponent } from './dialog.component';

describe('MskConfirmationDialogComponent', () => {
  let component: MskConfirmationDialogComponent;
  let fixture: ComponentFixture<MskConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskConfirmationDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
