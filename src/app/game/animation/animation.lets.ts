/////////////
// Classes //
/////////////

// Animation template
export class anim {
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

let animPopUpDialogBox = new anim(
    document.getElementById("dialogBox"), // Object animated
    33,                                   // ms between each anim frame
    [8, 32, 8, null],                     // # of frames in each anim sequence
    ["fadeIn", "pause", "fadeOut", null]) // list of anim sequences
export function popUpDialogBox() { animPopUpDialogBox.object = document.getElementById("dialogBox");  return animPopUpDialogBox; }
