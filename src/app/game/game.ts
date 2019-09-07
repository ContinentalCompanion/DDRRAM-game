/////////////////////////////////////////////
//                 game.ts                 //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Handles game logic         //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////

import { initDate, progressTime } from "./game-time/game-time";
import { gameLets } from "./game.lets";
import { uiLets, docElems } from "./ui/ui.lets"
import { initInvUI, updateInvUI, showDialogBox } from "./ui/ui";


//////////
// Init //
//////////

export function addGameButtonListeners() {
	docElems.attemptMemeButton.addEventListener("click", attemptMeme, false);
	docElems.trainMemeryButton.addEventListener("click", trainMemery, false);
	docElems.workButton.addEventListener("click", work, false);
	docElems.attemptEducationButton.addEventListener("click", attemptEducation, false);
}


//////////////////////
// Gameplay Actions //
//////////////////////

function attemptMeme() {
	if (Math.random() < gameLets.memeChance) {
		gameLets.memes += 1;
		showDialogBox(uiLets.memeSuccessText, uiLets.successColor, uiLets.attemptMemeIcon);
        gameLoop();
	}

	else {
		showDialogBox(uiLets.memeFailureText, uiLets.failColor, uiLets.attemptMemeIcon);
		gameLoop();
	}
}

function trainMemery() {
	if (gameLets.memeChance < 1.0) {
        gameLets.memeChance += gameLets.memeChanceIncrease;
		showDialogBox(uiLets.trainMemeryText, uiLets.successColor, uiLets.trainMemeryIcon);
        gameLoop();
	}

	else {
		showDialogBox(uiLets.trainMemeryErrorText, uiLets.neutralColor, uiLets.trainMemeryIcon);
	}
}

function work() {
	gameLets.cash += gameLets.salary;
	showDialogBox(uiLets.workText, uiLets.successColor, uiLets.workIcon);
	gameLoop();
}

function attemptEducation() {
	if (Math.random() < gameLets.raiseChance) {
		gameLets.salary += gameLets.raise;
		showDialogBox(uiLets.educationSuccessText, uiLets.successColor, uiLets.educationIcon);
		gameLoop();
	}
	else {
		showDialogBox(uiLets.educationFailureText, uiLets.failColor, uiLets.educationIcon);
		gameLoop();
	}
}


//////////
// Game //
//////////

export function gameLoop() {
	gameLets.cash = progressTime();
	updateInvUI();

	if (gameLets.cash < 0)
		defeat();
}

function defeat() {
	console.log("Game over!");
}

export function gameInit() {
	initDate(gameLets.startingMonth, gameLets.startingDay, gameLets.startingYear);
	initInvUI();
	addGameButtonListeners();
}
