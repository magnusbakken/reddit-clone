import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'The Angular 2 screencast',
        'The easiest way to learn Angular 2 is with Fullstack.io!',
        10
      ),
      new Article(
        'Fullstack react',
        'Want to learn React too?',
      ),
      new Article(
        'Vue is new',
        'And pretty cool syntax too',
      ),
      new Article(
        'But what about elm?',
        'Everybody likes elm'
      )
    ]
  }
}
