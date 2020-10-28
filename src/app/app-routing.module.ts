import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {ListBlogsComponent} from './blog/list-blogs/list-blogs.component';
import {CreateBlogComponent} from './blog/create-blog/create-blog.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {ViewPostComponent} from './post/view-post/view-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-blogs', component: ListBlogsComponent},
  {path: 'create-blog', component: CreateBlogComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'view-post/:id', component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
