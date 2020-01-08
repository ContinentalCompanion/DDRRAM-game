// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameWorldUiService } from '../game-world-ui.service';
import { Subscription } from 'rxjs';

// App Lets
import { inventoryBlocks } from './inventory.lets';

// App Functions
import { updateInventoryValues, updateInventoryText } from './inventory.lets';


@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit, OnDestroy {
  actionSubscription: Subscription;
  inventoryBlocks = inventoryBlocks;

  // When gameplay action is taken, update Inventory UI
  constructor(private gameWorldUiService: GameWorldUiService) {
    this.actionSubscription = gameWorldUiService.lastGameplayAction$.subscribe(
      lastGameplayAction => {
        updateInventoryValues();
        updateInventoryText();
      }
    );
  }

  ngOnInit() {
    updateInventoryValues();
    updateInventoryText();
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }
}
