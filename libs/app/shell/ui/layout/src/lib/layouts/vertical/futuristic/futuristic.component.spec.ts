import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturisticComponent } from './futuristic.component';

describe('FuturisticComponent', () => {
  let component: FuturisticComponent;
  let fixture: ComponentFixture<FuturisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
