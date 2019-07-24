import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-sibling',
  template: `
    {{ message }}
  `
})
export class SiblingComponent implements OnInit {
  message: string;

  constructor(private data: DataSharingService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
}
