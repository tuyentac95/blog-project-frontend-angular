import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideBarComponent } from './blog-side-bar.component';

describe('BlogSideBarComponent', () => {
  let component: BlogSideBarComponent;
  let fixture: ComponentFixture<BlogSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
