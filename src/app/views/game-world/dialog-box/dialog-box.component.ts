// Core
import { Component, Input, OnDestroy } from '@angular/core';
import { GameActionService } from '../game-action/game-action.service';
import { Subscription } from 'rxjs';

// App Lets
import { animPopUpDialogBox } from '../../../game/animation/animation.lets';

// App Functions
import { beginAnim } from '../../../game/animation/animation';
import { updateDialogBoxes } from './dialog-box.lets';


@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})

export class DialogBoxComponent implements OnDestroy {
  // Current dialog box properties
  dialogBoxIcon: string;
  dialogBoxColor: string;
  dialogBoxText: string;

  // Subscriptions to update dialog box when a gameplay action is taken
  dialogBoxSubscription: Subscription;
  resultSubscription: Subscription;
  
  // Data streams from subscriptions
  @Input() result: number;
  @Input() dialogBox: {
    icon: string,
    successColor: string,
    failColor: string,
    successText: string,
    failText: string};
  
  // When a gameplay action is taken, update dialog box
  constructor(private GameActionService: GameActionService) {
    this.dialogBoxSubscription = GameActionService.dialogBox$.subscribe(
      dialogBox => {
        updateDialogBoxes();
        this.dialogBox = dialogBox;
        this.dialogBoxIcon = dialogBox.icon;
        this.dialogBoxText = dialogBox.successText;
        beginAnim(animPopUpDialogBox);
      }
    );
    
    this.resultSubscription = GameActionService.result$.subscribe(
      result => {
        this.result = result;

        if (this.result == 1) {
          this.dialogBoxColor = this.dialogBox.successColor;
          this.dialogBoxText = this.dialogBox.successText;
        }

        else if (this.result == 0) {
          this.dialogBoxColor = this.dialogBox.failColor;
          this.dialogBoxText = this.dialogBox.failText;
        }
      }
    );
  }

  ngOnDestroy() {
    // Clean up event subscriptions
    this.dialogBoxSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }
}
