import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SubBlogModel} from './blog-response';
import {AuthService} from '../auth/shared/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAllSubBlogs(): Observable<Array<SubBlogModel>> {
    // const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.http.get<Array<SubBlogModel>>('http://localhost:8080/api/appblog');
  }

  createSubBlog(subBlogModel: SubBlogModel): Observable<SubBlogModel> {
    // const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getJwtToken());
    return this.http.post<SubBlogModel>('http://localhost:8080/api/appblog', subBlogModel);
  }
}
