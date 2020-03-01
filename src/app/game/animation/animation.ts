/////////////////////////////////////////////
//              animation.ts               //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Interval based animations  //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////

import * as animLets from "./animation.lets";
import { gameEngine } from "../game.lets";


////////////////
// Animations //
////////////////

export function popUpDialogBoxAnim() { beginAnim(animLets.popUpDialogBox()); }


/////////////////////////
// Animation Framework //
/////////////////////////

// Coroutine wrapper
function beginAnim(animType: animLets.anim) {
	if (animType.actEnabled == false)              // Disable actions during important anims
		gameEngine.actionsEnabled = false;
	gameEngine.currAnims.push(animType);           // Update list of playing anims
	clearInterval(animType.id);                    // End animations already playing
	animType.coroutine = animate(animType);        // Instantiate coroutine
	animType.coroutine.next();                     // Execute until the first yield
	animType.coroutine.next(animType.sequence[0]); // Start the first animation loop in the sequence
}

// Coroutine to chain together animation loops
function* animate(animType: animLets.anim) {
	animType.loopIndex = 0; // Reset loop index
	animType.seqIndex = 0;  // Reset animation sequence index

	while (true) {
		// Run next animation loop
		animType.id = setInterval(selectAnim, animType.tickDelay, animType, yield);
	}
}

// Selects correct animation based on parameter input
function selectAnim(animType: animLets.anim, seqType: string) {
	// Increment opacity
	if (seqType == "fadeIn") {
		animType.object.style.opacity = (animType.loopIndex * (1 / animType.tickCount[animType.seqIndex])).toString();
	}

	// Decrement opacity
	else if (seqType == "fadeOut") {
		animType.object.style.opacity = (1 - animType.loopIndex * (1 / animType.tickCount[animType.seqIndex])).toString();
	}

	// Do nothing
	else if (seqType == "pause") {
		
	}

	// Increment loop index
	animType.loopIndex++;

	// End loop
	if (animType.loopIndex > animType.tickCount[animType.seqIndex]) {
		clearInterval(animType.id);

		// Reset loop index
		animType.loopIndex = 0;

		// If anim not done, start next animation loop in sequence
		animType.seqIndex++;
		if (animType.sequence[animType.seqIndex] != null) {
			animType.coroutine.next(animType.sequence[animType.seqIndex])
		}

		// If done, cleanup anim
		else {
			// Reset animation sequence index
			animType.seqIndex = 0;

			// Remove anim from list of currently playing anims
			let index = gameEngine.currAnims.indexOf(animType);
			if (index > -1)
				gameEngine.currAnims.splice(index, 1)
			
			// If there are still important anims playing, finish and exit function
			for (let anim of gameEngine.currAnims) {
				if (anim.actEnabled == false)
					return;
			}

			// Otherwise, reenable actions, then finish
			gameEngine.actionsEnabled = true;
		}
	}
}
