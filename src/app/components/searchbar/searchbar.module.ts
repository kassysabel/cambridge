import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
      SharedModule,
      CommonModule,
      ReactiveFormsModule,
  ],
  exports: [ SearchbarComponent],
  providers: [],
})
export class SearchbarModule { }
