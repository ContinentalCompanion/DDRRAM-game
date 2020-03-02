// Core
import { Component, Input, OnDestroy } from '@angular/core';
import { GameActionService } from '../game-action/game-action.service';
import { Subscription } from 'rxjs';

// App Classes
import { dialogBox } from '../dialog-box/dialog-box.lets'

// App Lets
import { animPopUpDialogBox } from '../../../game/animation/animation.lets';

// App Functions
import { beginAnim } from '../../../game/animation/animation';


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
  @Input() result1: number;
  @Input() dialogBox1: dialogBox;
  
  // When a gameplay action is taken, update dialog box
  constructor(private GameActionService: GameActionService) {
    this.dialogBoxSubscription = GameActionService.dialogBox$.subscribe(
      dialogBox => {
        dialogBox.update();
        this.dialogBox1 = dialogBox;
        this.dialogBoxIcon = dialogBox.icon;
        this.dialogBoxText = dialogBox.successText;
        beginAnim(animPopUpDialogBox);
      }
    );
    
    this.resultSubscription = GameActionService.result$.subscribe(
      result => {
        this.result1 = result;

        if (this.result1 == 1) {
          this.dialogBoxColor = this.dialogBox1.successColor;
          this.dialogBoxText = this.dialogBox1.successText;
        }

        else if (this.result1 == 0) {
          this.dialogBoxColor = this.dialogBox1.failColor;
          this.dialogBoxText = this.dialogBox1.failText;
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
