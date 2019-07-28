import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  _getPosts() {
    // TO ADD params :
    const params = new HttpParams().set('userId', '1');
    return this.http.get(this.ROOT_URL + '/posts', { params });
  }

  createPost(data) {
    const headers = new HttpHeaders().set('Authorization', 'auth-token');

    return this.http.post(this.ROOT_URL + '/posts', data, { headers });
  }

  putPost(data) {
    return this.http.put(`${this.ROOT_URL}/posts/${data.id}`, data);
  }

  deletePost(data) {
    return this.http.delete(`${this.ROOT_URL}/posts/${data.id}`);
  }
}
