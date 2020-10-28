import {Component, Input, OnInit} from '@angular/core';
import {VoteType} from './vote-type';
import {throwError} from 'rxjs';
import {PostModel} from '../post-model';
import {VotePayload} from './vote-payload';
import {AuthService} from '../../auth/shared/auth.service';
import {PostService} from '../post.service';
import {ToastrService} from 'ngx-toastr';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  votePayload: VotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(
    // private voteService: VoteService,
              private authService: AuthService,
              private postService: PostService,
              private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    };
    // this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    // this.updateVoteDetails();
  }

  // tslint:disable-next-line:typedef
  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    // this.vote();
    this.downvoteColor = '';
  }

  // tslint:disable-next-line:typedef
  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    // this.vote();
    this.upvoteColor = '';
  }

  // tslint:disable-next-line:typedef
  // private vote() {
  //   this.votePayload.postId = this.post.id;
  //   this.voteService.vote(this.votePayload).subscribe(() => {
  //     this.updateVoteDetails();
  //   }, error => {
  //     this.toastr.error(error.error.message);
  //     throwError(error);
  //   });
  // }

  // tslint:disable-next-line:typedef
  // private updateVoteDetails() {
  //   this.postService.getPost(this.post.id).subscribe(post => {
  //     this.post = post;
  //   });
  // }

}
