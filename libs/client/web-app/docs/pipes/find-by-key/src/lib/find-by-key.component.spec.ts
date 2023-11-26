import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindByKeyComponent } from './find-by-key.component';

describe('FindByKeyComponent', () => {
  let component: FindByKeyComponent;
  let fixture: ComponentFixture<FindByKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindByKeyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FindByKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
