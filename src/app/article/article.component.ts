import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: Article;

  upvote(): void {
    this.article.voteUp();
  }

  downvote(): void {
    this.article.voteDown();
  }
}
