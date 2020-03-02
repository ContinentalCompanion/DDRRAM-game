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

// Classes
import { anim } from "./animation.lets";

// App Lets
import { gameEngine } from "../game.lets";


/////////////////////////
// Animation Framework //
/////////////////////////

// Coroutine wrapper
export function beginAnim(animType: anim) {
	// Disable actions during important anims
	if (animType.actEnabled == false)
		gameEngine.actionsEnabled = false;

	gameEngine.currAnims.push(animType);            // Update list of playing anims
	clearInterval(animType.id);                     // End animations already playing
	animType.coroutine = animate(animType);         // Instantiate coroutine
	animType.coroutine.next();                      // Execute until the first yield
	animType.coroutine.next(animType.sequences[0]); // Start the first anim frame
}

// Coroutine to chain together frames
function* animate(animType: anim) {
	animType.loopIndex = 0; // Reset loop index
	animType.seqIndex = 0;  // Reset animation sequence index

	while (true) {
		// Run next animation loop
		animType.id = setInterval(selectAnim, animType.tickDelay, animType, yield);
	}
}

// Selects next frame based on anim sequence param
function selectAnim(animType: anim, seqType: string) {
	// Apply to all objects in list
	for (let object of animType.objects) {
		// Increment opacity
		if (seqType == "fadeIn") {
			object.style.opacity = (animType.loopIndex * (1 / animType.tickCount[animType.seqIndex])).toString();
		}

		// Decrement opacity
		else if (seqType == "fadeOut") {
			object.style.opacity = (1 - animType.loopIndex * (1 / animType.tickCount[animType.seqIndex])).toString();
		}

		// Do nothing
		// else if (seqType == "pause") {}
	}

	// Increment loop index
	animType.loopIndex++;

	// End loop
	if (animType.loopIndex > animType.tickCount[animType.seqIndex]) {
		clearInterval(animType.id);

		// Reset loop index
		animType.loopIndex = 0;

		// If anim not done, start next frame in sequence
		animType.seqIndex++;
		if (animType.sequences[animType.seqIndex] != null) {
			animType.coroutine.next(animType.sequences[animType.seqIndex])
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

			// Otherwise, reenable actions, then finish and exit function
			gameEngine.actionsEnabled = true;
		}
	}
}
