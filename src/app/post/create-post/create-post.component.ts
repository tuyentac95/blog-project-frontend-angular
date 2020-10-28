import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreatePostPayload} from './create-post.payload';
import {SubBlogModel} from '../../blog/blog-response';
import {Router} from '@angular/router';
import {PostService} from '../../shared/post.service';
import {BlogService} from '../../blog/blog.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  blogs: Array<SubBlogModel>;

  constructor(private router: Router,
              private postService: PostService,
              private blogService: BlogService) {
    this.postPayload = {
      description: '',
      postName: '',
      subBlogName: '',
      url: ''
    };
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subBlogName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.blogService.getAllSubBlogs().subscribe((data) => {
      this.blogs = data;
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subBlogName = this.createPostForm.get('subBlogName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    console.log(this.postPayload);

    this.postService.createPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  discardPost() {
    this.router.navigateByUrl('/');
  }
}
