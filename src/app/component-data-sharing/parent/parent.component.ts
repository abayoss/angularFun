import { Component, OnInit } from '@angular/core';

// child to parent via viewChild :
import { ViewChild, AfterViewInit } from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  // parent to child:
  parentMessage = 'This is a Message from the parent';
  // child to parent :
  ChildMessage: string;
  // child two to parent to child three:
  posts = [];
  // child One to parent by ViewChild:
  @ViewChild(ChildOneComponent) childOneView;
  ChildMessageByViewChild: string;
  // any to any by Service Subject:
  siblingMessage: string;
  constructor(private data: DataSharingService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe(siblingMessage => (this.siblingMessage = siblingMessage));
  }

  // child to parent:
  onReceiveMessage($event) {
    this.ChildMessage = $event;
  }
  // child two to parent:
  onAddPost(post) {
    this.posts.push(post);
  }
  // child One to parent by ViewChild:
  ngAfterViewInit() {
    this.ChildMessageByViewChild = this.childOneView.ChildMessage;
  }
  // send new message to service then to sibling
  newMessage() {
    this.data.changeMessage('Hello from another Sibling');
  }
}
