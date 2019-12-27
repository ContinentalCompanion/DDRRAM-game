// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { GameWorldComponent } from './views/game-world/game-world.component';
import { HowToPlayComponent } from './views/how-to-play/how-to-play.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'game', component: GameWorldComponent },
  { path: 'howToPlay', component: HowToPlayComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
