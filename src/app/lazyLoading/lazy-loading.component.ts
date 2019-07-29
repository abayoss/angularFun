import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <button
      routerLink="lazyLoading/load-me"
      type="button"
      class="btn btn-primary"
    >
      load me, I am lazy..²²²
    </button>
    <router-outlet></router-outlet>
  `
})
export class LazyLoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
