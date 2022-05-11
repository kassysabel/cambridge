import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticleCardComponent,
  ],
  imports: [
      SharedModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule
  ],
  exports: [ 
      ArticleCardComponent,
    ],
  providers: [],
})
export class ArticlesCardModule { }
