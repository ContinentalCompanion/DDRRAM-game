// Core
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// App Lets
import { inventoryBlocks } from './inventory.lets';

// App Services
import { GameActionService } from '../game-action/game-action.service';

// App Functions
import { updateInventory } from './inventory.lets';
// import { updateInventoryValues, updateInventoryText } from './inventory.lets';


@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnDestroy {
    // Defined in inventory.lets.ts, used in Angular HTML
    inventoryBlocks = inventoryBlocks;
    
    // Subscription to update properties when a gameplay action is taken
    actionSubscription: Subscription;
    
    // When gameplay action is taken, update Inventory UI
    constructor(private GameActionService: GameActionService) {
        this.actionSubscription = GameActionService.dialogBox$.subscribe(
            dialogBox => {
                updateInventory();
            }
        );
    }

    ngOnDestroy() {
        // Clean up event subscriptions
        this.actionSubscription.unsubscribe();
    }
}
