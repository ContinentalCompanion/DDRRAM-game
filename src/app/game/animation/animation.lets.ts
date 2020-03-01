/////////////
// Classes //
/////////////

// Animation template
export class anim {
	object: HTMLElement; // Object animated
	tickDelay: number;   // ms between each anim frame
	tickCount: number[]; // # of frames in each anim sequence
	sequence: string[];  // list of anim sequences
	actEnabled: boolean; // are actions enabled during anim?
	
	constructor(object: HTMLElement, tickDelay: number, tickCount: number[], sequence: string[], actEnabled: boolean) {
		this.object = object;
		this.tickDelay = tickDelay;
		this.tickCount = tickCount;
		this.sequence = sequence;
		this.actEnabled = actEnabled;
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

const animPopUpDialogBox = new anim(
    document.getElementById("dialogBox"),  // Object animated
    33,                                    // ms between each anim frame
    [8, 32, 8, null],                      // # of frames in each anim sequence
	["fadeIn", "pause", "fadeOut", null],  // list of anim sequences
	true)                                  // are actions enabled during anim?
export function popUpDialogBox() { animPopUpDialogBox.object = document.getElementById("dialogBox");  return animPopUpDialogBox; }
