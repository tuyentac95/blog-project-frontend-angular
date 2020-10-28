import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentPayload} from './CommentPayload';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId, {headers: header});
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.httpClient.post<any>('http://localhost:8080/api/comments/', commentPayload, {headers: header});
  }
}
