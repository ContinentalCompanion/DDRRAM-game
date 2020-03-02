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

// App Lets
import { gameLets } from "./game.lets";
import { gameTimeLets } from "./game-time/game-time.lets";

// App Init Functions
import { animInit } from "./animation/animation.lets"

// App Functions
import { progressTime } from "./game-time/game-time";


//////////
// Init //
//////////

// Run once when game world screen is opened (in game-world.component)
export function gameInit() {
	animInit();  // Init anims (finds HTML Elements to animate)
}


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
	}

	else {
		appGameLoop();
		return 0;
	}
}

export function trainMemery() {
	if (gameLets.memeChance < 1.0) {
        //gameLets.memeChance = floatRound(gameLets.memeChance + gameLets.memeChanceIncrease);
		gameLets.memeChance += gameLets.memeChanceIncrease;
		appGameLoop();
		return 1;
	}

	else {
		return 0;
	}
}

export function work() {
	gameLets.cash += gameLets.salary;
	appGameLoop();
	return 1;
}

export function education() {
	if (Math.random() < gameLets.raiseChance) {
		gameLets.salary += gameLets.raise;
		appGameLoop();
		return 1;
	}

	else {
		appGameLoop();
		return 0;
	}
}


//////////
// Game //
//////////

export function appGameLoop() {
	progressTime();
	gameLets.cash = updateCash();

	if (gameLets.cash < 0)
		defeat();
}

function updateCash() {
	let newCash = gameLets.cash;

    // Pay bills every week
    if (gameTimeLets.daysElapsed % 7 == 0)
        newCash -= gameLets.bills;

    // Negative cash = defeat
    return newCash;
}

function defeat() {
	console.log("Game over!");
}
