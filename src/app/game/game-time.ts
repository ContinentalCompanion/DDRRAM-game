/////////////////////////////////////////////
//               gameTime.ts               //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Keeps track of time during //
//   game loops                            //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////

import { gameLets } from "../app";


/////////////////////////
// Game Time Letiables //
/////////////////////////

class date {
	month: number;
	day: number;
	year: number;

	constructor(month: number, day: number, year: number) {
		this.month = month;
		this.day = day;
		this.year = year;
	}
}

export let gameDate;
export let daysElapsed = 0;


//////////
// Init //
//////////

export function initDate(month: number, day: number, year: number) {
    gameDate = new date(gameLets.startingMonth, gameLets.startingDay, gameLets.startingYear);
}


///////////////
// Game Loop //
///////////////

export function progressTime() {
    gameDate.day++;
    daysElapsed++;
    let newCash = gameLets.cash;

    // Pay bills every week
    if (daysElapsed % 7 == 0)
        newCash -= gameLets.bills;

    // Negative cash = defeat
    return newCash;
}
