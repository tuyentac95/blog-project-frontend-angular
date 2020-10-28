import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../shared/post-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../shared/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentPayload} from '../../comment/CommentPayload';
import {CommentService} from '../../comment/comment.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];

  constructor(private postService: PostService,
              private activeRoute: ActivatedRoute,
              private commentService: CommentService,
              private router: Router) {
    this.postId = this.activeRoute.snapshot.params.id;
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      postId: this.postId
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  // tslint:disable-next-line:typedef
  getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      console.log(data);
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  postComment() {
    console.log(this.commentPayload);
  }
}
