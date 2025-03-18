import { Component } from '@angular/core';
import { MainBoardService } from '../main-board/main-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win-screen',
  standalone: false,
  templateUrl: './win-screen.component.html',
  styleUrl: './win-screen.component.css',
})
export class WinScreenComponent {
  constructor(
    public mainBoardService: MainBoardService,
    private router: Router
  ) {}

  onClickRestart() {
    this.mainBoardService.newGame();
    this.router.navigate(['/']);
  }
}
