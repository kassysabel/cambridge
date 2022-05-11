import {NgModule} from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatMenuModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
