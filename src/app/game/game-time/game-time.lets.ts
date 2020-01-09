/////////////
// Classes //
/////////////

export class date {
	month: number;
	day: number;
	year: number;

	constructor(month: number, day: number, year: number) {
		this.month = month;
		this.day = day;
		this.year = year;
	}
}



///////////////
// Game Time //
///////////////

export const gameTimeLets = {
    startDate: 719318,  // Start date of game, in days elapsed since 0 AD
    daysElapsed: 0      // Number of days elapsed since game start
}
