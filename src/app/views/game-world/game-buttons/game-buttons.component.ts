// Core
import { Component } from '@angular/core';

// App Lets
import { gameButtons } from './game-buttons.lets';
import { gameActionDialogBoxes } from '../dialog-box/dialog-box.lets';

// App Services
import { GameWorldUiService } from '../game-world-ui.service';

// App Functions
import { meme, trainMemery, work, education } from '../../../game/game';

@Component({
  selector: 'game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss']
})

export class GameButtonsComponent {
  gameButtons = gameButtons;  // Defined in game-buttons.lets.ts, used in Angular html
  constructor(private gameWorldUiService: GameWorldUiService) {}

  actions = {
    meme: gameActionDialogBoxes[0],
    trainMemery: gameActionDialogBoxes[1],
    work: gameActionDialogBoxes[2],
    education: gameActionDialogBoxes[3]
  };

  takeGameplayAction(action1: string) {
    // Update Game World UI
    let result1: number;
    switch (action1) {
      case "meme":
        result1 = meme();
        this.gameWorldUiService.updateLastGameplayAction(this.actions.meme);
        break;
      case "trainMemery":
        result1 = trainMemery();
        this.gameWorldUiService.updateLastGameplayAction(this.actions.trainMemery);
        break;
      case "work":
        result1 = work();
        this.gameWorldUiService.updateLastGameplayAction(this.actions.work);
        break;
      case "education":
        result1 = education();
        this.gameWorldUiService.updateLastGameplayAction(this.actions.education);
        break;
      default:
        break;
      }
      
    this.gameWorldUiService.updateLastGameplayActionResult(result1);
  }
}
