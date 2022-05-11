import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@pages/login/login.component';

import { ArticleComponent } from '@pages/articles-dashboard/article/article.component';
import { ArticlesDashboardComponent } from '@pages/articles-dashboard/articles-dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { ArticleDetailsResolver, OwnedArticleDetailsResolver } from './resolvers/details.resolver';
import { UserDashboardComponent } from '@pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'articles',
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: ArticlesDashboardComponent,
      },
      {
        path: 'new/create',
        component: ArticleComponent
      },
      {
        path: 'publishedArticles/:userNumber',
        component: UserDashboardComponent,
        resolve: {
          publishedArticles: OwnedArticleDetailsResolver
        }
      },
      {
        path: ':articleNumber',
        resolve: {
          article: ArticleDetailsResolver
        },
        component: ArticleComponent
      },
      
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
