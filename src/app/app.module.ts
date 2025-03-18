import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { GlobalLoadingComponent } from './global-loading/global-loading.component';
import { WinScreenComponent } from './win-screen/win-screen.component';
import { DeckInitComponent } from './deck-init/deck-init.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    GlobalLoadingComponent,
    WinScreenComponent,
    DeckInitComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
