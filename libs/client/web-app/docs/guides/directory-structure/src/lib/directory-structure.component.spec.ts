import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectoryStructureComponent } from './directory-structure.component';

describe('DirectoryStructureComponent', () => {
  let component: DirectoryStructureComponent;
  let fixture: ComponentFixture<DirectoryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectoryStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectoryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
