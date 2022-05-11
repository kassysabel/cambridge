import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { ArticlesDashboardComponent } from './articles-dashboard.component';
import { CommonModule } from '@angular/common';
import { SearchbarModule } from '@components/searchbar/searchbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { SidebarModule } from '@components/sidebar/sidebar.module';
import { ArticlesCardModule } from '@components/article-card/article-card.module';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesDashboardComponent
  ],
  imports: [
      SharedModule,
      CommonModule,
      RouterModule,
      SearchbarModule,
      SidebarModule,
      ArticlesCardModule,
      ReactiveFormsModule
  ],
  exports: [ 
      ArticleComponent,
      ArticlesDashboardComponent
    ],
  providers: [],
})
export class ArticlesDashboardModule { }
