import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { ToolbarMenuComponent } from './toolbar-menu.component';

@NgModule({
  declarations: [
    ToolbarMenuComponent
  ],
  imports: [
      SharedModule,
      CommonModule,
  ],
  exports: [ ToolbarMenuComponent],
  providers: [],
})
export class ToolbarMenuModule { }
