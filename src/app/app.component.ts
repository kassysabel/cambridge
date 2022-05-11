import { Component } from '@angular/core';
import { UserService } from '@services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cambridge';

  constructor(public userService: UserService) {}
}
