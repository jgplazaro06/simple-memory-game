import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { MainBoardService } from './main-board/main-board.service';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(
    private mainBoardService: MainBoardService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const isDeckInitialized: boolean = this.mainBoardService.getDeckSize() != 0;
    if (!isDeckInitialized) {
      this.router.navigate(['/']);
      alert('Please create a deck first');
    }
    return isDeckInitialized;
  }
}
