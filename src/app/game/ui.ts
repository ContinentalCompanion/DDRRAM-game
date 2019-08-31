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

import { popUpDialogBoxAnim } from "./animation";

import { gameLets } from "../app";
import { uiLets } from "../app";


////////////////////////////////
// Document Element Letiables //
////////////////////////////////

export let docElems = {
    memesCounter: document.getElementById("memesCounter"),
    cashCounter: document.getElementById("cashCounter"),
    
    memeChanceCounter: document.getElementById("memeChanceCounter"),
    salaryCounter: document.getElementById("salaryCounter"),
    
    billsCounter: document.getElementById("billsCounter"),
    raiseCounter: document.getElementById("raiseCounter"),
    raiseChanceCounter: document.getElementById("raiseChanceCounter"),
    
    dialogBox: document.getElementById("dialogBox"),
    dialogBoxIcon: document.getElementById("dialogBoxIcon"),
    dialogBoxText: document.getElementById("dialogBoxText"),
    
    attemptMemeButton: document.getElementById("attemptMemeButton"),
    trainMemeryButton: document.getElementById("trainMemeryButton"),
    workButton: document.getElementById("workButton"),
    attemptEducationButton: document.getElementById("attemptEducationButton")
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
