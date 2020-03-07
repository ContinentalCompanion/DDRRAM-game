// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    // NgModel

// App Components
import { CalendarComponent } from './calendar/calendar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { GameButtonsComponent } from './game-buttons/game-buttons.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DialogBoxBigComponent } from './dialog-box-big/dialog-box-big.component';


@NgModule({
    // Core Modules
    imports: [
        CommonModule,
        FormsModule
    ],
    
    // App Components
    declarations: [
        CalendarComponent,
        DialogBoxComponent,
        GameButtonsComponent,
        InventoryComponent,
        DialogBoxBigComponent
    ],
    
    // App Components
    exports: [
        CalendarComponent,
        DialogBoxComponent,
        GameButtonsComponent,
        InventoryComponent,
        DialogBoxBigComponent
    ]
})

export class GameWorldModule { }
