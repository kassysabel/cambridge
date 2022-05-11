import { async, inject, TestBed, waitForAsync } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Article } from "@models/article.model";
import { ArticleService } from "./articles.service";
import { MockArticles, MockCreatedArticle, MockSelectedArticle } from "./mock/articles.mock.service";

describe("ArticleService", () => {
  let service: ArticleService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService]
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    service = TestBed.inject(ArticleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });

  describe("listArticles", () => {
    it("return list of all articles",() => {
        service.listAllArticles().subscribe((articles) => {
          expect(articles).toContain(MockArticles[0]);
        });  
    })
  });

  describe("getArticles", () => {
    it("return selected article", () => {
        service.getSelectedArticle("1").subscribe((article) => {
          expect(article).toEqual(MockSelectedArticle);
        });
    });
  });

  describe("createArticle", () => {
    it("return article in response with id", () => {
      let newArticle = MockCreatedArticle;
      expect(newArticle.id).toBeUndefined();
        service.createArticle(newArticle).subscribe((createdArticle) => {
          expect(createdArticle).toContain(newArticle);
          expect(createdArticle.id).not.toBeUndefined();

        });
    });
  });

  describe("edit", () => {
    it("return updated article in response", () => {
      let updatedArticle = MockSelectedArticle;
      updatedArticle.title = 'Update title to this'
        service.editArticle(updatedArticle).subscribe((editedArticle) => {
          expect(editedArticle.title).toEqual('Update title to this');
          expect(editedArticle.id).toEqual(updatedArticle.id);
        });
    });
  });
});
