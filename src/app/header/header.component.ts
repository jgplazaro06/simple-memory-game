import { Component } from '@angular/core';
import { MainBoardService } from '../main-board/main-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    public mainBoardService: MainBoardService,
    private router: Router
  ) {}

  onClickRestart() {
    this.mainBoardService.newGame();
    this.router.navigate(['/']);
  }
}
