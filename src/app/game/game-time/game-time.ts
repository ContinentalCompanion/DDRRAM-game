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



//////////
// Time //
//////////

export function convertDaysToDate(days: number) {
    let m = 0;
    let d = days;
    let y = 0;

    // Convert days to months and years
    while (d > 0) {
        // Count a leap year
        if ((d >= 366) && ((y % 4) == 0)) {
            d -= 366;
            y += 1;
        }

        // Count a year
        else if ((d >= 365) && ((y % 4) != 0)) {
            d -= 365;
            y += 1;
        }

        // Count a 31-day month (Jan, Mar, May, Jul, Aug, Oct, Dec)
        else if ((d >= 31) && (((m % 12) == 0) || ((m % 12) == 2) || ((m % 12) == 4) || ((m % 12) == 6) || ((m % 12) == 7) || ((m % 12) == 9) || ((m % 12) == 11))) {
            d -= 31;
            m += 1;
        }

        // Count a 30-day month (Apr, Jun, Sep, Nov)
        else if ((d >= 30) && (((m % 12) == 3) || ((m % 12) == 5) || ((m % 12) == 8) || ((m % 12) == 10))) {
            d -= 30;
            m += 1;
        }

        // Count a leap year February
        else if ((d >= 29) && ((m % 12) == 1) && ((y % 4) == 0)) {
            d -= 29;
            m += 1;
        }

        // Count a non-leap year February
        else if ((d >= 28) && (m == 1) && ((y % 4) != 0)) {
            d -= 28;
            m += 1;
        }

        else {
            break;
        }
    }

    // Convert months to years
    while (m > 12) {
        m -= 12;
        y += 1;
    }

    let newDate = new date(m, d, y);
    return newDate;
}


///////////////
// Game Loop //
///////////////

export function progressTime() {
    gameTimeLets.daysElapsed++;
    let newCash = gameLets.cash;

    // Pay bills every week
    if (gameTimeLets.daysElapsed % 7 == 0)
        newCash -= gameLets.bills;

    // Negative cash = defeat
    return newCash;
}
