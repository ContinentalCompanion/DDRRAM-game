/////////////////////////////////////////////
//              animation.ts               //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Interval based animations  //
//                                         //
/////////////////////////////////////////////


/////////////
// Classes //
/////////////

// Animation template
class anim {
	object: HTMLElement; // Object animated
	tickDelay: number;   // ms between each anim frame
	tickCount: number[]; // # of frames in each anim sequence
	sequence: string[];  // list of anim sequences
	
	constructor(object: HTMLElement, tickDelay: number, tickCount: number[], sequence: string[]) {
		this.object = object;
		this.tickDelay = tickDelay;
		this.tickCount = tickCount;
		this.sequence = sequence;
	}

	// Loop letiables
	loopIndex: number = 0;
	seqIndex: number = 0;
	id = null;
	coroutine = null;
}


////////////////
// Animations //
////////////////

let popUpDialogBox = new anim(
	document.getElementById("dialogBox"), // Object animated
	33,                                   // ms between each anim frame
	[8, 32, 8, null],                     // # of frames in each anim sequence
	["fadeIn", "pause", "fadeOut", null]) // list of anim sequences

export function popUpDialogBoxAnim() { beginAnim(popUpDialogBox); }


/////////////////////////
// Animation Framework //
/////////////////////////

// Coroutine wrapper
function beginAnim(animType: anim) {
	clearInterval(animType.id);                    // End animations already playing
	animType.coroutine = animate(animType);        // Instantiate coroutine
	animType.coroutine.next();                     // Execute until the first yield
	animType.coroutine.next(animType.sequence[0]); // Start the first animation loop in the sequence
}

// Coroutine to chain together animation loops
function* animate(animType: anim) {
	animType.loopIndex = 0; // Reset loop index
	animType.seqIndex = 0;  // Reset animation sequence index

	while (true) {
		// Run next animation loop
		animType.id = setInterval(selectAnim, animType.tickDelay, animType, yield);
	}
}

// Selects correct animation based on parameter input
function selectAnim(animType: anim, seqType: string) {
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
