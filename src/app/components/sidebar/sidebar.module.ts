import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
      SharedModule,
      CommonModule,
      RouterModule,
  ],
  exports: [ SidebarComponent],
  providers: [],
})
export class SidebarModule { }
