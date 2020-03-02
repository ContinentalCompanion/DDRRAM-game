// Core
import { Component } from '@angular/core';

// App Lets
import { gameEngine } from '../../../game/game.lets'
import { gameButtons } from './game-buttons.lets';
import { dialogBoxes } from '../dialog-box/dialog-box.lets';

// App Services
import { GameActionService } from '../game-action/game-action.service';

// App Functions
import { meme, trainMemery, work, education } from '../../../game/game';

@Component({
  selector: 'game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss']
})

export class GameButtonsComponent {
  // Defined in game-buttons.lets.ts, used in Angular HTML
  gameButtons = gameButtons;

  // Setup access to game action service
  constructor(private GameActionService: GameActionService) {}

  takeGameplayAction(action1: string) {
    // Disable actions during cinematics
    if (gameEngine.actionsEnabled == false)
      return;

    // Game Action Service - update action
    this.GameActionService.updateAction(action1);

    // Game Action Service - update result and dialog box  // Also trigger app code
    let result1: number;
    switch (action1) {
      case "meme":
        result1 = meme();
        this.GameActionService.updateDialogBox(dialogBoxes[0]);
        break;
      case "trainMemery":
        result1 = trainMemery();
        this.GameActionService.updateDialogBox(dialogBoxes[1]);
        break;
      case "work":
        result1 = work();
        this.GameActionService.updateDialogBox(dialogBoxes[2]);
        break;
      case "education":
        result1 = education();
        this.GameActionService.updateDialogBox(dialogBoxes[3]);
        break;
      default:
        break;
      }
    this.GameActionService.updateResult(result1);
  }
}
