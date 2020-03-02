// Core
import { Component, OnDestroy } from '@angular/core';
import { GameActionService } from '../game-action/game-action.service';
import { Subscription } from 'rxjs';

// App Lets
import { gameTimeLets } from '../../../game/game-time/game-time.lets';

// App Classes
import { date } from '../../../game/game-time/game-time.lets';

// App Functions
import { convertDaysToDate } from '../../../game/game-time/game-time';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnDestroy {
  // Current calendar properties
  currentDate: date = convertDaysToDate(gameTimeLets.startDate);
  month = this.currentDate.month;
  day = this.currentDate.day;
  year = this.currentDate.year;

  // Subscription to update calendar when a gameplay action is taken
  actionSubscription: Subscription;

  // When gameplay action is taken, update calendar
  constructor(private GameActionService: GameActionService) {
    this.actionSubscription = GameActionService.action$.subscribe(
      action => {
        this.updateCalendar();
      }
    );
  }

  updateCalendar() {
    this.currentDate = convertDaysToDate(gameTimeLets.startDate + gameTimeLets.daysElapsed);
    this.month = this.currentDate.month;
    this.day = this.currentDate.day;
    this.year = this.currentDate.year;
  }

  ngOnDestroy() {
    // Clean up event subscriptions
    this.actionSubscription.unsubscribe();
  }
}
