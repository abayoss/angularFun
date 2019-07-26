import { HttpClientService } from './httpClient.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-http-client',
  templateUrl: './httpClient.component.html'
})
export class HttpClientComponent implements OnInit {
  editState = false;
  contactType = [
    { id: 1, label: 'SMS' },
    { id: 2, label: 'TEL' },
    { id: 3, label: 'EMAIL' }
  ];
  newPost = {
    title: '',
    body: '',
    myContact: null,
    subscribe: false
  };

  myPosts: any[] = [];
  // dependency injection :
  constructor(private HttpClient: HttpClientService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.HttpClient._getPosts().subscribe((res: any[]) => {
      this.myPosts = res;
    });
  }

  onAddPost(f) {
    if (f.valid) {
      this.HttpClient.createPost(this.newPost).subscribe(res => {
        this.myPosts.unshift(this.newPost);
        this.resetNewPost();
      });
    }
  }

  editPost(post) {
    this.newPost = post;
    this.editState = true;
  }

  onUpdatePost() {
    this.HttpClient.putPost(this.newPost).subscribe(
      res => {
        this.editState = false;
        this.resetNewPost();
      },
      err => console.error(err)
    );
  }

  onRemovePost(index, id) {
    this.HttpClient.deletePost(id).subscribe(res =>
      this.myPosts.splice(index, 1)
    );
  }

  resetNewPost() {
    this.newPost = {
      title: '',
      body: '',
      myContact: null,
      subscribe: false
    };
  }
  log(param) {
    console.log(param);
  }
}
