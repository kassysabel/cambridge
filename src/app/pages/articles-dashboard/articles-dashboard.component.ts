import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@models/article.model';
import { CardContent } from '@models/cardContent.model';
import { ArticleService } from '@services/articles.service';
import { UserService } from '@services/users.service';

@Component({
  selector: 'articles-dashboard',
  templateUrl: './articles-dashboard.component.html',
  styleUrls: ['./articles-dashboard.component.scss']
})
export class ArticlesDashboardComponent implements OnInit {
  title = 'cambridge';
  listArticles: Array<Article> = new Array<Article>();
  articlesDashboardCards:  Array<CardContent> = new Array<CardContent>();
  constructor(private articleService: ArticleService, private router: Router, 
    private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.articlesDashboardCards = [
      { routerLink: `new/create`, caption: 'Create Article'},
      { routerLink: `publishedArticles/${this.userService.user.id}`, caption: 'View Owned Articles'}
    ]
    this.articleService.listAllArticles().subscribe((results) => {
      this.listArticles = results;
    });
    if (this.router.url.includes('publishedArticles')) {
      this.listArticles = this.activatedRoute.snapshot.data['publishedArticles'];
    }
  }
}
