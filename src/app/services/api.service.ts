import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  userId:number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  addPost(post: Post) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json'
    })
    const httpParams = new HttpParams().set('notify',  'true')

    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post, {headers: httpHeaders, params: httpParams})
  }
}
