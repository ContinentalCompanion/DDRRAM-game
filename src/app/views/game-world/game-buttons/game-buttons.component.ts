// Core Components
import { Component } from '@angular/core';

// Game Button Lets
import { gameButtons } from './game-buttons.lets';

// App Lets
import { gameActionDialogBoxes } from '../dialog-box/dialog-box.lets';

// App Services
import { GameWorldUiService } from '../game-world-ui.service';

// App Functions
import { meme, trainMemery, work, education } from '../../../game/game';

@Component({
  selector: 'game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['../game-world.component.scss']
})

export class GameButtonsComponent {
  gameButtons = gameButtons;  // List of game buttons, defined in game-buttons.lets.ts
  constructor(private gameWorldUiService: GameWorldUiService) {}

  takeGameplayAction(action1: string) {
    // Update Game World UI
    let result1: number;
    switch (action1) {
      case "meme":
        result1 = meme();
        this.gameWorldUiService.updateLastGameplayAction(gameActionDialogBoxes.meme);
        break;
      case "trainMemery":
        result1 = trainMemery();
        this.gameWorldUiService.updateLastGameplayAction(gameActionDialogBoxes.trainMemery);
        break;
      case "work":
        result1 = work();
        this.gameWorldUiService.updateLastGameplayAction(gameActionDialogBoxes.work);
        break;
      case "education":
        result1 = education();
        this.gameWorldUiService.updateLastGameplayAction(gameActionDialogBoxes.education);
        break;
      default:
        break;
      }
    this.gameWorldUiService.updateLastGameplayActionResult(result1);
  }
}
