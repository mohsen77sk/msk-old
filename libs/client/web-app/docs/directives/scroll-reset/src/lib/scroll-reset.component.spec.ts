import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollResetComponent } from './scroll-reset.component';

describe('ScrollResetComponent', () => {
  let component: ScrollResetComponent;
  let fixture: ComponentFixture<ScrollResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollResetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
