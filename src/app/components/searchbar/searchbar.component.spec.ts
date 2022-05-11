import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@models/article.model';
import { SearchbarComponent } from './searchbar.component';
import { MockArticles } from '@services/mock/articles.mock.service';
import { SharedModule } from 'src/app/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedModule, BrowserAnimationsModule ],
      declarations: [SearchbarComponent],
      providers: [{ provide: Router, useFactory: routerStub }]
    });
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`articles has default value`, () => {
    expect(component.articles).toEqual([]);
  });

  it(`options has default value`, () => {
    expect(component.options).toEqual([]);
  });

  it('should correctly render the passed @Input value', () => {
    component.options = MockArticles; // 1
    fixture.detectChanges(); // 2
    const compiled = fixture.debugElement.nativeElement; // 2
    expect(component.options).toBe(MockArticles); // 3
  });

});
