import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '@models/cardContent.model';
import { UserService } from '@services/users.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements  OnInit {
  @Input() cardContents: CardContent[] = new Array<CardContent>();
  cards: CardContent[] = new Array<CardContent>();
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.cardContents.forEach((card) => {
      card.routerLink = card.routerLink.trim();
      this.cards.push(card);
    })
  }
}