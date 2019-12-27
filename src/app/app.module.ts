// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// App Modules
import { GameWorldModule } from './views/game-world/game-world.module';

// Router Components
import { AppComponent } from './app.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { GameWorldComponent } from './views/game-world/game-world.component';
import { HowToPlayComponent } from './views/how-to-play/how-to-play.component';


@NgModule({

  // App Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameWorldModule
  ],

  // Router Components
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameWorldComponent,
    HowToPlayComponent,
  ],

  // TO-DO: Research what this is
  providers: [],

  // Start App at Main Component
  bootstrap: [AppComponent]
})
export class AppModule { }
