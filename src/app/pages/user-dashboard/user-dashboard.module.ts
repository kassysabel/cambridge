import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { CommonModule } from '@angular/common';
import { SearchbarModule } from '@components/searchbar/searchbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@components/sidebar/sidebar.module';
import { ArticlesCardModule } from '@components/article-card/article-card.module';
import { UserDashboardComponent } from './user-dashboard.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
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
    UserDashboardComponent
    ],
  providers: [],
})
export class UserDashboardModule { }
