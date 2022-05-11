import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '@models/article.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements  OnInit {
    @Input() articles: Array<Article> = [];
    options: Array<Article> = []
    searchForm = new FormControl();
    filteredOptions: Observable<Array<Article>>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.searchForm.valueChanges.pipe(
        startWith(''),
        map(value => this.filter(value)),
    );
  }

  getArticleTitle(article: Article){
      return article ? article.title : '';
  }

  goToArticle(option: Article) {
    this.router.navigate(['articles', option.id])
  }

  filter(value: string): Array<Article> {
    const filterValue = value.toLowerCase();
    return this.articles.filter(option => option.title.toLowerCase().includes(filterValue));
  }
}
