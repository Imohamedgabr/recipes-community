import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogPostsComponent } from './recent-blog-posts.component';

describe('RecentBlogPostsComponent', () => {
  let component: RecentBlogPostsComponent;
  let fixture: ComponentFixture<RecentBlogPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBlogPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
