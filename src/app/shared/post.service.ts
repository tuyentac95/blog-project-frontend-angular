import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from './post-model';
import {AuthService} from '../auth/shared/auth.service';
import {CreatePostPayload} from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAllPosts(): Observable<Array<PostModel>> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/', {headers: header});
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.http.post('http://localhost:8080/api/posts', postPayload, {headers: header});
  }

  getPost(postId: number): Observable<PostModel> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + postId, {headers: header});
  }
}
