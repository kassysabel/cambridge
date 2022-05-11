import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "@models/article.model";
import { Observable } from "rxjs";
import { endpoints } from "@constants/endpoints.const";
@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {}

    listAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(endpoints.ARTICLESLIST);
    }

    getSelectedArticle(articleNum: string): Observable<Article> {
        let articleSelectedUrl = endpoints.ARTICLE.replace('article_number', articleNum);
        return this.http.get<Article>(articleSelectedUrl);
    }

    createArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(endpoints.ARTICLESLIST, article);
    }

    editArticle(article: Article): Observable<Article> {
        let articleSelectedUrl = endpoints.ARTICLE.replace('article_number', article.id.toString());
        return this.http.put<Article>(articleSelectedUrl, article);
    }

}