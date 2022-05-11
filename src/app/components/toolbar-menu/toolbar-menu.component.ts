import { Component, Input, OnInit } from '@angular/core';
import { User } from '@models/user.model';

@Component({
  selector: 'toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  @Input() user: User;
  title = 'cambridge';

  constructor() {}

  ngOnInit() {
    this.user = this.user?.username ? this.user : new User();
    if (!this.user.username) {
      this.user.username = 'Guest';
    }
  }
}
