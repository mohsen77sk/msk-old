import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskDrawerComponent } from './drawer.component';

describe('MskDrawerComponent', () => {
  let component: MskDrawerComponent;
  let fixture: ComponentFixture<MskDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskDrawerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
