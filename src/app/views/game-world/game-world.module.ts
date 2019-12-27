// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CalendarComponent } from './calendar/calendar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { GameButtonsComponent } from './game-buttons/game-buttons.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent,
    DialogBoxComponent,
    GameButtonsComponent,
    InventoryComponent
  ],
  exports: [
    CalendarComponent,
    DialogBoxComponent,
    GameButtonsComponent,
    InventoryComponent
  ]
})


export class GameWorldModule { }
