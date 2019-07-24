import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    {{ message }}
  `,
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  // parent to child :
  @Input() message: string;
  // child to parent :
  ChildMessage = 'This is a Message from the Child';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {
    this.sendMessageToParent();
  }

  sendMessageToParent() {
    this.messageEvent.emit(this.ChildMessage);
  }
}
