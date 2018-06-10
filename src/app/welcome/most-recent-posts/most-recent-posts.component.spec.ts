import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentPostsComponent } from './most-recent-posts.component';

describe('MostRecentPostsComponent', () => {
  let component: MostRecentPostsComponent;
  let fixture: ComponentFixture<MostRecentPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRecentPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
