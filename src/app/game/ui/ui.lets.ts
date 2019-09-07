/////////////
// Imports //
/////////////

import { gameLets } from "../game.lets"



////////
// UI //
////////

export const uiLets = {
	// Style
	successColor: "lightgreen",
	failColor: "tomato",
	neutralColor: "lightsteelblue",

	// Dialog box text
	memeSuccessText: "<b>Meme Success!</b>",
	memeFailureText: "<b>Meme Failure...</b>",
	trainMemeryText: "<b>Memery Skill Increased!</b><br>+" + (gameLets.memeChanceIncrease * 100).toString() + "% meme chance",
	trainMemeryErrorText: "<b>Can't Train Memery!</b><br>Your memery skill is maxed",
	workText: "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned",
	educationSuccessText: "<b>Education Successful!</b><br>Salary increased by $" + gameLets.raise.toString(),
	educationFailureText: "<b>Education Failure...</b>",

	// Dialog box icons
	attemptMemeIcon: "fas fa-paint-brush",
	trainMemeryIcon: "fas fa-biking",
	workIcon: "fas fa-briefcase",
	educationIcon: "fas fa-book"
}



///////////////////////
// Document Elements //
///////////////////////

export let docElems = {
    memesCounter:null, cashCounter:null,
    memeChanceCounter:null, salaryCounter:null,
    billsCounter:null, raiseCounter:null, raiseChanceCounter:null,
    dialogBox:null, dialogBoxIcon:null, dialogBoxText:null,
    attemptMemeButton:null, trainMemeryButton:null, workButton:null, attemptEducationButton:null }

export function findDocElems() {
    docElems.memesCounter = document.getElementById("memesCounter");
    docElems.cashCounter = document.getElementById("cashCounter");

    docElems.memeChanceCounter = document.getElementById("memeChanceCounter");
    docElems.salaryCounter = document.getElementById("salaryCounter");

    docElems.billsCounter = document.getElementById("billsCounter");
    docElems.raiseCounter = document.getElementById("raiseCounter");
    docElems.raiseChanceCounter = document.getElementById("raiseChanceCounter");

    docElems.dialogBox = document.getElementById("dialogBox");
    docElems.dialogBoxIcon = document.getElementById("dialogBoxIcon");
    docElems.dialogBoxText = document.getElementById("dialogBoxText");

    docElems.attemptMemeButton = document.getElementById("attemptMemeButton");
    docElems.trainMemeryButton = document.getElementById("trainMemeryButton");
    docElems.workButton = document.getElementById("workButton");
    docElems.attemptEducationButton = document.getElementById("attemptEducationButton");
}
