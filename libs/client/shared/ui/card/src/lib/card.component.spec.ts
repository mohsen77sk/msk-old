import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskCardComponent } from './card.component';

describe('MskCardComponent', () => {
  let component: MskCardComponent;
  let fixture: ComponentFixture<MskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
