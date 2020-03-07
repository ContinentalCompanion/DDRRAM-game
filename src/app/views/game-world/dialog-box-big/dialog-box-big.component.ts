// Core
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// App Lets
import { gameTimeLets } from '../../../game/game-time/game-time.lets';

// App Services
import { GameActionService } from '../game-action/game-action.service';

@Component({
    selector: 'dialog-box-big',
    templateUrl: './dialog-box-big.component.html',
    styleUrls: ['./dialog-box-big.component.scss']
})

export class DialogBoxBigComponent implements OnDestroy {
    // Current properties
    daysElapsed = gameTimeLets.daysElapsed;
    
    // Subscription to update properties when a gameplay action is taken
    actionSubscription: Subscription;
    
    // When gameplay action is taken, update properties
    constructor(private GameActionService: GameActionService) {
        this.actionSubscription = GameActionService.action$.subscribe(
            action => {
                this.updateText();
            }
        );
    }

    updateText() {
        this.daysElapsed = gameTimeLets.daysElapsed;
    }
        
    ngOnDestroy() {
        // Clean up event subscriptions
        this.actionSubscription.unsubscribe();
    }
}
