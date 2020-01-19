// Core
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// App Lets
import { gameTimeLets } from '../../../game/game-time/game-time.lets';

// App Services
import { GameWorldUiService } from '../game-world-ui.service';

@Component({
  selector: 'dialog-box-big',
  templateUrl: './dialog-box-big.component.html',
  styleUrls: ['./dialog-box-big.component.scss']
})

export class DialogBoxBigComponent implements OnDestroy {
  daysElapsed = gameTimeLets.daysElapsed;
  actionSubscription: Subscription;

  // When gameplay action is taken, update Game Time Lets
  constructor(private gameWorldUiService: GameWorldUiService) {
    this.actionSubscription = gameWorldUiService.lastGameplayAction$.subscribe(
      lastGameplayAction => {
        this.updateGameTimeLets();
      }
    );
  }

  updateGameTimeLets() {
    this.daysElapsed = gameTimeLets.daysElapsed;
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }
}
