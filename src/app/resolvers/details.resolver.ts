import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ArticleService } from "@services/articles.service";
import { UserService } from "@services/users.service";

@Injectable()
export class ArticleDetailsResolver implements Resolve<any> {
  constructor(private articleService: ArticleService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.articleService.getSelectedArticle(route.params['articleNumber']);
  }
}

@Injectable()
export class OwnedArticleDetailsResolver implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getArticlesOfUser(route.params['userNumber']);
  }
}
