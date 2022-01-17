import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskLoadingBarComponent } from './loading-bar.component';

describe('MskLoadingBarComponent', () => {
  let component: MskLoadingBarComponent;
  let fixture: ComponentFixture<MskLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskLoadingBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
