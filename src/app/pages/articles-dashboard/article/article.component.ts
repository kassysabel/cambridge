import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/article.model';
import { User } from '@models/user.model';
import { ArticleService } from '@services/articles.service';
import { UserService } from '@services/users.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  formTitle:string = 'Create Article';
  isEdit: boolean = false;
  articleItem: Article = new Article();
  user: User = new User();
  articleForm: FormGroup;
  hasValue: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private snackBar: MatSnackBar,
    private articleService: ArticleService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      articleTitle: new FormControl(Validators.required),
      articleBody: new FormControl(Validators.required),
      articleOwner: new FormControl(Validators.required)
    });
    this.isReadArticle();
  }

  isReadArticle() {
    this.articleItem = this.activatedRoute.snapshot.data['article'] ? this.activatedRoute.snapshot.data['article'] : new Article();
    if (this.articleItem.title) {
      this.hasValue = true;
      this.userService.getUsers(this.articleItem.userId.toString()).subscribe((results) => {
        this.user = results;
      })
    } else {
      this.hasValue = false;
      this.user = this.userService.user;
    }
    this.formTitle = this.hasValue ? (this.isEdit ? 'Edit Article' : 'View Article') : 'Create Article';
  }

  createArticle() {
    this.formTitle = this.hasValue ? (this.isEdit ? 'Edit Article' : 'View Article') : 'Create Article';
    this.user = this.userService.user;
    if (this.articleForm.touched) {
      let articleObj: Article = new Article();
      articleObj.body = this.articleForm.get('articleBody').value;
      articleObj.title = this.articleForm.get('articleTitle').value;
      articleObj.userId = this.user.id;
      this.articleService.createArticle(articleObj).subscribe((response) => {
        if (response) {
         this.showSuccessMessage()
        }
      })
    }
  }

  editArticle() {
    this.isEdit = true;
    this.formTitle = this.hasValue ? (this.isEdit ? 'Edit Article' : 'View Article') : 'Create Article';
    if (this.articleForm.touched) {
      let articleObj: Article = new Article();
      articleObj.id = this.articleItem.id;
      articleObj.body = this.articleForm.get('articleBody').value;
      articleObj.title = this.articleForm.get('articleTitle').value;
      articleObj.userId = this.articleItem.userId;
      this.articleService.editArticle(articleObj).subscribe((response) => {
        if (response) {
          this.showSuccessMessage()
        }
      })
    }
  }

  showSuccessMessage() {
    this.snackBar.openFromComponent(SuccessMsgComponent, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}

@Component({
  selector: 'snack-bar',
  template: `<span class="success-msg">Successfully saved Article!</span>`,
  styles: [
    `.success-msg { color: #EFEBE9;}`,
  ],
})
export class SuccessMsgComponent {}