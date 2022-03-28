import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MskVirtualKeyboardComponent } from './virtual-keyboard.component';

describe('MskVirtualKeyboardComponent', () => {
  let component: MskVirtualKeyboardComponent;
  let fixture: ComponentFixture<MskVirtualKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MskVirtualKeyboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MskVirtualKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
