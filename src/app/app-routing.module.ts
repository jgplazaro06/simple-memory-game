import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DeckInitComponent } from './deck-init/deck-init.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { RouteGuard } from './route.guards';

const routes: Routes = [
  { path: '', component: DeckInitComponent },
  { path: 'main', component: MainBoardComponent, canActivate: [RouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard],
})
export class AppRoutingModule {}
