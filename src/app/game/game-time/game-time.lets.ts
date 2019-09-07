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

export let gameTimeLets = {
    gameDate: null,
    daysElapsed: 0
}
