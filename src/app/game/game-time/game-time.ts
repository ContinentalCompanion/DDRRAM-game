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

import { gameTimeLets, date } from "./game-time.lets";
import { gameLets } from "../game.lets";


//////////
// Init //
//////////

export function initDate(month: number, day: number, year: number) {
    gameTimeLets.gameDate = new date(gameLets.startingMonth, gameLets.startingDay, gameLets.startingYear);
}


///////////////
// Game Loop //
///////////////

export function progressTime() {
    gameTimeLets.gameDate.day++;
    gameTimeLets.daysElapsed++;
    let newCash = gameLets.cash;

    // Pay bills every week
    if (gameTimeLets.daysElapsed % 7 == 0)
        newCash -= gameLets.bills;

    // Negative cash = defeat
    return newCash;
}
