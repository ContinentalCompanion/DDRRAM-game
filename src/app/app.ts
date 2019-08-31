/////////////////////////////////////////////
//                  app.ts                 //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Main app file              //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////

import * as gameTime from "./game/game-time";
import * as game from "./game/game";
import * as ui from "./game/ui";


////////////////////
// Game Letiables //
////////////////////

export let gameLets = {
	// Inventory
	memes: 0,
	cash: 0,

	// Trainable Stats
	memeChance: 0.1,
	salary: 8,

	// Static letiables
	bills: 30,
	raise: 2,
	raiseChance: 0.25,
	memeChanceIncrease: 0.02,

	// Game Time
	startingMonth: 4,
	startingDay: 20,
	startingYear: 1969

}


//////////////////
// UI Letiables //
//////////////////

export let uiLets = {
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


//////////
// Game //
//////////

export function gameLoop() {
	gameLets.cash = gameTime.progressTime();
	ui.updateInvUI();

	if (gameLets.cash < 0)
		defeat();
}

function defeat() {
	console.log("Game over!");
}

function gameInit() {
	gameTime.initDate(gameLets.startingMonth, gameLets.startingDay, gameLets.startingYear);
	ui.initInvUI();
	game.addGameButtonListeners();

}


//////////
// Main //
//////////

