import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {
  lessonTitle = 'Template syntax / displaying data   :';
  lesson = {
    title:
      'Template syntax, String Interpolation by double curly brace : {{variable}}',
    body: 'Angulars template syntax extends HTML and JavaScript'
  };
  imageUrl = 'https://source.unsplash.com/collection/190727/400x200';
  posts = [
    { language: 'arabic' },
    { language: 'english' },
    { language: 'français' }
  ];
  randomColor: string;
  badge = 1;
  showSpan = false;
  formText = 'text';
  disabledBtn = true;
  datePipe = new Date(2019, 0, 1);
  asyncPipe = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This data is shown after 3sec');
    }, 3000);
  });
  constructor() {}

  ngOnInit() {
    this.randomColorGenerator();
  }
  randomColorGenerator() {
    const colors = ['red', 'green', 'yellow', 'purple', 'black'];
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colors.length - 1) + 1;
      this.randomColor = colors[randomIndex];
    }, 100);
  }
  toggleSpan() {
    this.showSpan = !this.showSpan;
  }
  enableRedBtn() {
    this.disabledBtn = false;
  }
}
