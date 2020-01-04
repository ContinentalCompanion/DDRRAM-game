// Core
import { Component } from '@angular/core';

// App
import { date, gameTimeLets } from '../../../game/game-time/game-time.lets';
import { convertDaysToDate } from '../../../game/game-time/game-time';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['../game-world.component.scss']
})

export class CalendarComponent {
  currentDate: date = convertDaysToDate(gameTimeLets.startDate);
  month = this.currentDate.month;
  day = this.currentDate.day;
  year = this.currentDate.year;

  constructor() {}

  updateCalendar() {
    this.currentDate = convertDaysToDate(gameTimeLets.startDate + gameTimeLets.daysElapsed);
    this.month = this.currentDate.month;
    this.day = this.currentDate.day;
    this.year = this.currentDate.year;
  }
}
