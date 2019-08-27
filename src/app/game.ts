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

import { showDialogBox } from "./ui";

import { gameLets } from "./app";
import { uiLets } from "./app";

import { gameLoop } from "./app";

import { docElems } from "./ui";


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
