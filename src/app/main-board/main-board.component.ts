import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CardModel } from '../models/card.model';
import { MainBoardService } from './main-board.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-main-board',
  standalone: false,
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.css',
})
export class MainBoardComponent implements OnInit, AfterViewInit {
  cardDeck: CardModel[] = [];
  keys: number = 0;

  cardOne: CardModel = { value: 0, isClicked: false, isMatched: false };
  isHoldingACard: boolean = false;
  isHoldingTwoCards: boolean = false;
  // private cardOne: CardModel = new CardModel();
  // private cardTwo: CardModel;

  constructor(private mainBoardService: MainBoardService) {}

  ngOnInit(): void {
    this.initializeDeck();
  }

  ngAfterViewInit(): void {}

  initializeDeck() {
    // this.mainBoardService.initializeDeck(20);

    this.keys = this.mainBoardService.getDeckSize();

    this.cardDeck.length = 0;
    for (let i = 1; i < this.keys + 1; i++) {
      let card: CardModel = {
        value: i >= this.keys / 2 + 1 ? Math.floor(i - this.keys / 2) : i,
        isClicked: false,
        isMatched: false,
      };
      this.cardDeck.push(card);
    }

    this.cardDeck = this.shuffleDeck(this.cardDeck);
  }

  shuffleDeck(array: CardModel[]): CardModel[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onCardClick(card: CardModel) {
    if (this.isHoldingACard === false) {
      card.isClicked = true;
      this.cardOne = card;
      this.isHoldingACard = true;
      return;
    }

    if (this.cardOne === card) return;

    this.mainBoardService.addAttempts();
    this.isHoldingTwoCards = true;
    this.isHoldingACard = false;

    if (card.value === this.cardOne.value) {
      card.isMatched = true;
      card.isClicked = true;
      this.cardOne.isMatched = true;
      this.cardOne.isMatched = true;
      this.mainBoardService.addToCurrentMatchSuccess();
      this.isHoldingTwoCards = false;
    } else {
     
      card.isClicked = true;
      setTimeout(() => {
        card.isClicked = false;
        this.cardOne.isClicked = false;
        this.isHoldingTwoCards = false;
      }, 1000);
    }

    // let cardOne: CardModel = { value: 0, isClicked: false, isMatched: false };
    // let cardTwo: CardModel = { value: 0, isClicked: false, isMatched: false };
    // function matchLogic(card: CardModel) {
    //   if (cardOne.value === 0) {
    //     console.log(cardOne);
    //     console.log(card);
    //     card.isClicked = true;
    //     cardOne = card;
    //     return;
    //   }
    //   if (card.value === cardOne.value) {
    //     card.isMatched = true;
    //     card.isClicked = true;
    //     cardOne.isMatched = true;
    //     cardOne.isMatched = true;
    //   } else {
    //     card.isClicked = false;
    //     cardOne.isClicked = false;
    //     // cardOne.value = 0;
    //   }
    // }
    // // event.target.offsetParent.classList.toggle('toggle-stay')
    // return { matchLogic };
  }
}
