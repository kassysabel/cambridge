import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '@services/articles.service';
import { UserService } from '@services/users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Article } from '@models/article.model';
import { MockLoggedInUser } from '@services/mock/users.mock.service';
import { UserDashboardModule } from './user-dashboard.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { of } from 'rxjs';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let articleService: ArticleService;
  let userService: UserService
  let httpMock: HttpTestingController;
  let activatedRoute: ActivatedRoute
  beforeEach(() => {
    const routerStub = () => ({ url: { includes: () => ({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserDashboardComponent],
      imports: [
          HttpClientTestingModule,
          UserDashboardModule,
        ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          },
        },
        { provide: Router, useFactory: routerStub },
        ArticleService,
        UserService
      ]
    }).compileComponents();
    activatedRoute = TestBed.inject(ActivatedRoute);
    articleService = TestBed.inject(ArticleService);
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(UserDashboardComponent);
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
    it("load list of all user's articles", () => {
        articleService.listAllArticles().subscribe((articles) => {
          expect(component.listArticles[0]).toBeInstanceOf(Article);
          expect(component.listArticles).toContain(articles[3]);
        });  
    })
    it("load list of all user's articles based on route param", () => {
      userService.getArticlesOfUser(userService.user.id.toString()).subscribe((articles)=> {
        expect(component.listArticles).toEqual(articles)
      })
  })
  });

});
