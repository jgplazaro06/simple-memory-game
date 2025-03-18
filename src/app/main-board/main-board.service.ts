import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MainBoardService {
  private deckSize: number = 0;
  private matchCountWinCondition: number = 0;
  private currentMatchSucces: number = 0;

  private isWinConditionMet = new BehaviorSubject<boolean>(false);
  private currentAttempts = new BehaviorSubject<number>(0);

  attemptsCount$: Observable<number> = this.currentAttempts.asObservable();
  winConditionMet$: Observable<boolean> = this.isWinConditionMet.asObservable();

  addAttempts() {
    this.currentAttempts.next(this.currentAttempts.value + 1);
  }

  addToCurrentMatchSuccess() {
    this.currentMatchSucces++;
    if (this.currentMatchSucces === this.matchCountWinCondition)
      this.isWinConditionMet.next(true);
  }

  initializeDeck(decksize: number) {
    this.deckSize = decksize;
    this.matchCountWinCondition = decksize / 2;
  }

  newGame() {
    this.deckSize = 0;
    this.matchCountWinCondition = 0;
    this.currentAttempts.next(0);
    this.isWinConditionMet.next(false);
  }

  getAttempts(): number {
    return this.currentAttempts.value;
  }

  getDeckSize(): number {
    return this.deckSize;
  }
}
