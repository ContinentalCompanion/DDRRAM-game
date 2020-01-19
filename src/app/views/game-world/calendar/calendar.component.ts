// Core
import { Component, OnDestroy } from '@angular/core';
import { GameWorldUiService } from '../game-world-ui.service';
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
  currentDate: date = convertDaysToDate(gameTimeLets.startDate);
  month = this.currentDate.month;
  day = this.currentDate.day;
  year = this.currentDate.year;

  actionSubscription: Subscription;

  // When gameplay action is taken, update calendar
  constructor(private gameWorldUiService: GameWorldUiService) {
    this.actionSubscription = gameWorldUiService.lastGameplayAction$.subscribe(
      lastGameplayAction => {
        this.updateCalendar();
    });
  }

  updateCalendar() {
    this.currentDate = convertDaysToDate(gameTimeLets.startDate + gameTimeLets.daysElapsed);
    this.month = this.currentDate.month;
    this.day = this.currentDate.day;
    this.year = this.currentDate.year;
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }
}
