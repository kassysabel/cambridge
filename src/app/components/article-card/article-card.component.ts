import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { Article } from '@models/article.model';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit, AfterViewInit{
  title = 'cambridge';
  @Input() article?: Article;
  articleItem: Article;
  constructor() {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.articleItem = this.article;
  }

}
