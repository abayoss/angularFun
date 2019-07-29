import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-parent',
  template: `
    <h1>I'm a Lazy Component. Meet all my lazy children...</h1>

    <div *ngFor="let name of ['Foo', 'Bar', 'Baz']">
      <p>Hi, my name is {{ name }}. I'm a lazy child component.</p>

      <app-lazy-child></app-lazy-child>
    </div>
  `
})
export class LazyParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
