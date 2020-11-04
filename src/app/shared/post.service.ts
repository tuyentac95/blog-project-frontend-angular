import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from './post-model';
import {CreatePostPayload} from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    // const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());, {headers: header}
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/posts', postPayload);
  }

  getPost(postId: number): Observable<PostModel> {
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + postId);
  }
}
