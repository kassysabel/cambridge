import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '@services/articles.service';
import { UserService } from '@services/users.service';
import { ArticlesDashboardComponent } from './articles-dashboard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Article } from '@models/article.model';
import { ArticlesDashboardModule } from './articles-dashboard.module';
import { MockLoggedInUser } from '@services/mock/users.mock.service';

describe('ArticlesDashboardComponent', () => {
  let component: ArticlesDashboardComponent;
  let fixture: ComponentFixture<ArticlesDashboardComponent>;
  let articleService: ArticleService;
  let userService: UserService
  let httpMock: HttpTestingController;
  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });
    const routerStub = () => ({ url: { includes: () => ({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ArticlesDashboardComponent],
      imports: [
          HttpClientTestingModule,
          ArticlesDashboardModule,
        ],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        ArticleService,
        UserService
      ]
    }).compileComponents();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    articleService = TestBed.inject(ArticleService);
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ArticlesDashboardComponent);
    component = fixture.componentInstance;
    userService.user = MockLoggedInUser;
  });

  it("can load component", () => {
    expect(component).toBeTruthy();
  });

  describe("getArticles", () => {
    it("initialize variable listArticles", () => {
        expect(component.listArticles).toBeDefined();
    })
    it("load list of all articles", (inject([ArticleService], (articleService: ArticleService) => {
        expect(component.listArticles).toBeDefined()
        articleService.listAllArticles().subscribe((articles) => {
          expect(component.listArticles[0]).toBeInstanceOf(Article);
          expect(component.listArticles).toContain(articles[3]);
        });  
    })))
  });

});
