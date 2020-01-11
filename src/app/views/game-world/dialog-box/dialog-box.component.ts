// Core
import { Component, Input, OnDestroy } from '@angular/core';
import { GameWorldUiService } from '../game-world-ui.service';
import { Subscription } from 'rxjs';

// App Functions
import { popUpDialogBoxAnim } from '../../../game/animation/animation';
import { updateGameActionDialogBoxes } from './dialog-box.lets';


@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})

export class DialogBoxComponent implements OnDestroy {
  actionSubscription: Subscription;
  resultSubscription: Subscription;
  @Input() lastGameplayAction: {icon: string, successColor: string,
    failColor: string, successText: string, failText: string};
  @Input() lastGameplayActionResult: number;

  dialogBoxIcon: string;
  dialogBoxColor: string;
  dialogBoxText: string;
  
  // When a gameplay action is taken, update dialog box
  constructor(private gameWorldUiService: GameWorldUiService) {
    this.actionSubscription = gameWorldUiService.lastGameplayAction$.subscribe(
      lastGameplayAction => {
        updateGameActionDialogBoxes();
        this.lastGameplayAction = lastGameplayAction;
        this.dialogBoxIcon = lastGameplayAction.icon;
        this.dialogBoxText = lastGameplayAction.successText;
        popUpDialogBoxAnim();
      }
    );

    this.resultSubscription = gameWorldUiService.lastGameplayActionResult$.subscribe(
      lastGameplayActionResult => {
        this.lastGameplayActionResult = lastGameplayActionResult;

        if (this.lastGameplayActionResult == 1) {
          this.dialogBoxColor = this.lastGameplayAction.successColor;
          this.dialogBoxText = this.lastGameplayAction.successText;
        }

        else if (this.lastGameplayActionResult == 0) {
          this.dialogBoxColor = this.lastGameplayAction.failColor;
          this.dialogBoxText = this.lastGameplayAction.failText;
        }
      }
    );
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }
}
