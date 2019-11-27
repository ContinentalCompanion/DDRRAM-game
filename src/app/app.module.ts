import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { GameWorldComponent } from './views/game-world/game-world.component';
import { HowToPlayComponent } from './views/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameWorldComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
