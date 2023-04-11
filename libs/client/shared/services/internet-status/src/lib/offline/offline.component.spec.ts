import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskOfflineComponent } from './offline.component';

describe('MskOfflineComponent', () => {
  let component: MskOfflineComponent;
  let fixture: ComponentFixture<MskOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskOfflineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MskOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
