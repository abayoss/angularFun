import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
  @Input() posts = [];
  constructor() { }

  ngOnInit() {
  }

}
