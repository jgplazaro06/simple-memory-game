import { Component } from '@angular/core';
import { MainBoardService } from '../main-board/main-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-init',
  standalone: false,
  templateUrl: './deck-init.component.html',
  styleUrl: './deck-init.component.css',
})
export class DeckInitComponent {
  deckSize: number = 0;
  constructor(private mainBoardService: MainBoardService, private route: Router) {}

  onClickSubmit() {
    if (this.deckSize === 0 || this.deckSize % 2 != 0) {
      alert('Please input an even number');
      return;
    }

    this.mainBoardService.initializeDeck(this.deckSize);
    this.route.navigate(['/main'])
  }
}
