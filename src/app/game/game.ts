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

// App
import { progressTime } from "./game-time/game-time";
import { gameLets } from "./game.lets";
// *DEPRECATED* UI now handled through Angular modules and components
//import { uiLets, docElems, findDocElems } from "./ui/ui.lets"
//import { initInvUI, updateInvUI, showDialogBox, } from "./ui/ui";


//////////
// Init //
//////////

// *DEPRECATED* Button clicks now handled through Angular modules and components
// export function addGameButtonListeners() {
// 	docElems.memeButton.addEventListener("click", meme, false);
// 	docElems.trainMemeryButton.addEventListener("click", trainMemery, false);
// 	docElems.workButton.addEventListener("click", work, false);
// 	docElems.educationButton.addEventListener("click", education, false);
// }


//////////////////////
// Gameplay Actions //
//////////////////////

// Returns 1 for success
// Returns 0 for failure

export function meme() {
	if (Math.random() < gameLets.memeChance) {
		gameLets.memes += 1;
		appGameLoop();
		return 1;

		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.memeSuccessText, uiLets.successColor, uiLets.memeIcon);
	}

	else {
		appGameLoop();
		return 0;

		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.memeFailureText, uiLets.failColor, uiLets.memeIcon);
	}
}

export function trainMemery() {
	if (gameLets.memeChance < 1.0) {
        gameLets.memeChance += gameLets.memeChanceIncrease;
		appGameLoop();
		return 1;
		
		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.trainMemeryText, uiLets.successColor, uiLets.trainMemeryIcon);		
	}

	else {
		return 0;

		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.trainMemeryErrorText, uiLets.neutralColor, uiLets.trainMemeryIcon);
	}
}

export function work() {
	gameLets.cash += gameLets.salary;
	appGameLoop();
	return 1;

	// *DEPRECATED* UI now handled through Angular modules and components
	//showDialogBox(uiLets.workText, uiLets.successColor, uiLets.workIcon);
}

export function education() {
	if (Math.random() < gameLets.raiseChance) {
		gameLets.salary += gameLets.raise;
		appGameLoop();
		return 1;

		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.educationSuccessText, uiLets.successColor, uiLets.educationIcon);
	}
	else {
		appGameLoop();
		return 0;

		// *DEPRECATED* UI now handled through Angular modules and components
		//showDialogBox(uiLets.educationFailureText, uiLets.failColor, uiLets.educationIcon);
	}
}


//////////
// Game //
//////////

export function appGameLoop() {
	gameLets.cash = progressTime();

	if (gameLets.cash < 0)
		defeat();

	// *DEPRECATED* UI now handled through Angular modules and components
	//updateInvUI();
	//updateCalUI();
}

function defeat() {
	console.log("Game over!");
}

export function gameInit() {
	// *DEPRECATED* UI now handled through Angular modules and components
	//findDocElems();
	//initInvUI();
	//updateCalUI();
	//addGameButtonListeners();
}
