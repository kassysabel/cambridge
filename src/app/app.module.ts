import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarMenuModule } from 'src/app/components/toolbar-menu/toolbar-menu.module';
import { ArticleService } from '@services/articles.service';
import { LoginComponent } from '@pages/login/login.component';
import { UserService } from '@services/users.service';

import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import { ArticlesDashboardModule } from '@pages/articles-dashboard/articles-dashboard.module';
import { CommonModule } from '@angular/common';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { ArticleDetailsResolver, OwnedArticleDetailsResolver } from './resolvers/details.resolver';
import { UserDashboardModule } from '@pages/user-dashboard/user-dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToolbarMenuModule,
    ArticlesDashboardModule,
    UserDashboardModule,
    SearchbarModule
  ],
  providers: [
    ArticleService, 
    UserService, 
    LoginGuard,
    ArticleDetailsResolver,
    OwnedArticleDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
