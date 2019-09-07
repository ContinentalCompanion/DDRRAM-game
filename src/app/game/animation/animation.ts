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


////////////////
// Animations //
////////////////

export function popUpDialogBoxAnim() { beginAnim(animLets.popUpDialogBox()); }


/////////////////////////
// Animation Framework //
/////////////////////////

// Coroutine wrapper
function beginAnim(animType: animLets.anim) {
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

		// Start next animation loop in sequence
		animType.seqIndex++;
		if (animType.sequence[animType.seqIndex] != null) {
			animType.coroutine.next(animType.sequence[animType.seqIndex])
		}

		else {
			// If no more, reset animation sequence index
			animType.seqIndex = 0;
		}
	}
}
