///////////////
// Templates //
///////////////

export class anim {
	// Private anim params
	private objNames: string[]; // Names of objects

	// Public anim params
	objects: HTMLElement[] = []; // Each seq is applied to all objs
	sequences: string[];         // List of anim sequences
	tickCount: number[];         // # of frames in each anim sequence
	tickDelay: number;           // ms between each anim frame
	actEnabled: boolean;         // Are actions enabled during anim?

	// Public loop letiables
	loopIndex: number = 0; // Current anim frame
	seqIndex: number = 0;  // Current type of frame change
	id = null;             // Animation SetInterval() id
	coroutine = null;      // Animation coroutine function

	constructor(objNames: string[],
				sequences: string[],
				tickCount: number[],
				tickDelay: number,
				actEnabled: boolean) {
		this.objNames = objNames;
		this.sequences = sequences;
		this.tickCount = tickCount;
		this.tickDelay = tickDelay;
		this.actEnabled = actEnabled;
	}

	// Find HTML Elements used by anims
	findObjs() {
		for (let i = 0; i < this.objNames.length; i++)
			this.objects[i] = document.getElementById(this.objNames[i]);
	}
}


//////////
// Init //
//////////

export function animInit() {
	// Initialize all Animations here (call findObjs on each one)
	animPopUpDialogBox.findObjs();
}


/////////////////////////
// Add Animations Here //
/////////////////////////

export const animPopUpDialogBox = new anim (
	["dialogBox"],                         // objNames
	["fadeIn", "pause", "fadeOut", null],  // sequences
	[8, 32, 8, null],                      // tickCount
	33,                                    // tickDelay
	true                                   // actEnabled
)
