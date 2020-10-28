import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubBlogModel} from '../blog-response';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  createBlogForm: FormGroup;
  subBlogModel: SubBlogModel;
  title = new FormControl('');
  description = new FormControl('');


  constructor(private router: Router,
              private blogService: BlogService) {
    this.createBlogForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.subBlogModel = {
      name: '',
      description: ''
    };
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createSubBlog() {
    this.subBlogModel.name = this.createBlogForm.get('title').value;
    this.subBlogModel.description = this.createBlogForm.get('description').value;
    this.blogService.createSubBlog(this.subBlogModel).subscribe(data => {
      this.router.navigateByUrl('list-blogs');
    }, error => {
      console.log('Error: ' + error);
    });
  }

  // tslint:disable-next-line:typedef
  discard() {
    this.router.navigateByUrl('/');
  }
}
