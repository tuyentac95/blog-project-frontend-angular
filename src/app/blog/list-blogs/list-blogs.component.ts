import { Component, OnInit } from '@angular/core';
import {SubBlogModel} from '../blog-response';
import {BlogService} from '../blog.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {

  blogs: Array<SubBlogModel>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllSubBlogs().subscribe(data => {
      this.blogs = data;
    }, error => {
      throwError(error);
    });
  }

}
