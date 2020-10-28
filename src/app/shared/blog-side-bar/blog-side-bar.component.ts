import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../blog/blog.service';
import {SubBlogModel} from '../../blog/blog-response';

@Component({
  selector: 'app-blog-side-bar',
  templateUrl: './blog-side-bar.component.html',
  styleUrls: ['./blog-side-bar.component.css']
})
export class BlogSideBarComponent implements OnInit {

  subBlogs: Array<SubBlogModel>;
  displayViewAll: boolean;

  constructor(private blogService: BlogService) {
    this.blogService.getAllSubBlogs().subscribe(data => {
      if (data.length >= 4) {
        this.subBlogs = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subBlogs = data;
      }
    });
  }

  ngOnInit(): void {
  }

}
