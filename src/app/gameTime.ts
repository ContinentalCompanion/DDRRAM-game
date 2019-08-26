////////////////////
// Public Classes //
////////////////////

// Game Time
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
// Letiables //
///////////////

let daysElapsed: number = 0;


//////////////////////
// Public Functions //
//////////////////////

export function progressTime(date: date, cash: number, bills: number) {
    date.day++;
    daysElapsed++;

    // Pay bills every week
    if (daysElapsed % 7 == 0)
        cash -= bills;

    // Negative cash = defeat
    return cash;
}
