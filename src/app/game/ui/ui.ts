/////////////////////////////////////////////
//                  ui.ts                  //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Handles all UI elements    //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////

import { popUpDialogBoxAnim } from "../animation/animation";
import { gameLets } from "../game.lets";
import { uiLets, docElems } from "./ui.lets";
import { convertDaysToDate } from "../game-time/game-time";
import { gameTimeLets } from "../game-time/game-time.lets";


/////////////////
// Calendar UI //
/////////////////

export function updateCalUI() {
	let convertedDate = convertDaysToDate(gameTimeLets.startDate + gameTimeLets.daysElapsed);
	docElems.dayCounter.innerHTML = (convertedDate.day + 1).toString();
	docElems.monthCounter.innerHTML = (convertedDate.month + 1).toString();
	docElems.yearCounter.innerHTML = (convertedDate.year + 1).toString();
}


//////////////////
// Inventory UI //
//////////////////

// Initialize Inventory UI to default values
export function initInvUI() {
	docElems.billsCounter.innerHTML = "$" + Math.round(gameLets.bills).toString();
	docElems.raiseCounter.innerHTML = "$" + Math.round(gameLets.raise).toString();
	docElems.raiseChanceCounter.innerHTML = Math.round(gameLets.raiseChance * 100).toString() + "%";
	updateInvUI();
}

// Update Inventory UI counters
export function updateInvUI() {
	docElems.memesCounter.innerHTML = Math.round(gameLets.memes).toString();
	docElems.memeChanceCounter.innerHTML = Math.round(gameLets.memeChance * 100).toString() + "%";
	docElems.cashCounter.innerHTML = "$" + Math.round(gameLets.cash).toString();
	docElems.salaryCounter.innerHTML = "$" + Math.round(gameLets.salary).toString();
    return;
}


/////////////////////
// Pop-up Messages //
/////////////////////

// Update dialog box text and show dialog box
export function showDialogBox(text: string = "", color: string = uiLets.neutralColor, icon: string = "") {
	docElems.dialogBoxText.innerHTML = text;
	docElems.dialogBox.style.backgroundColor = color;
	docElems.dialogBoxIcon.className = icon;
	popUpDialogBoxAnim();
}
