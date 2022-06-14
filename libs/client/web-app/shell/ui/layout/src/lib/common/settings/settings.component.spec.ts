import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSettingsComponent } from './settings.component';

describe('LayoutSettingsComponent', () => {
  let component: LayoutSettingsComponent;
  let fixture: ComponentFixture<LayoutSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
