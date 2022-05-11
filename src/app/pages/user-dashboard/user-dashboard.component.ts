import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@models/article.model';
import { CardContent } from '@models/cardContent.model';
import { User } from '@models/user.model';
import { UserService } from '@services/users.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  title = 'cambridge';
  listArticles: Array<Article> = new Array<Article>();
  user: User;
  userDashboardCards: Array<CardContent> = new Array<CardContent>();
  constructor(private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url.includes('publishedArticles')) {
      this.listArticles = this.activatedRoute.snapshot.data['publishedArticles'];
      this.user = this.userService.user;
    }
    this.userDashboardCards =  [
      { routerLink: `../../new/create`, caption: 'Create Article'},
      { routerLink: `../../`, caption: 'View All Articles'}
    ]
  }
}
