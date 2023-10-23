import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaWatcherComponent } from './media-watcher.component';

describe('MediaWatcherComponent', () => {
  let component: MediaWatcherComponent;
  let fixture: ComponentFixture<MediaWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaWatcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
