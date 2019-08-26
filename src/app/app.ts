////////////////////
// Game Letiables //
////////////////////

// Inventory
let memes: number = 0;
let cash: number = 0;

// Trainable Stats
let memeChance: number = 0.1;
let salary: number = 8;

// Static letiables
let bills: number = 30;
let raise: number = 2;
let raiseChance: number = 0.25;


//////////////////
// UI Letiables //
//////////////////

// Document elements
let memesCounter: HTMLElement = document.getElementById("memesCounter");
let cashCounter: HTMLElement = document.getElementById("cashCounter");

let memeChanceCounter: HTMLElement = document.getElementById("memeChanceCounter");
let salaryCounter: HTMLElement = document.getElementById("salaryCounter");

let billsCounter: HTMLElement = document.getElementById("billsCounter");
let raiseCounter: HTMLElement = document.getElementById("raiseCounter");
let raiseChanceCounter: HTMLElement = document.getElementById("raiseChanceCounter");

let dialogBox: HTMLElement = document.getElementById("dialogBox");
let dialogBoxIcon: HTMLElement = document.getElementById("dialogBoxIcon");
let dialogBoxText: HTMLElement = document.getElementById("dialogBoxText");

let attemptMemeButton: HTMLElement = document.getElementById("attemptMemeButton");
let trainMemeryButton: HTMLElement = document.getElementById("trainMemeryButton");
let workButton: HTMLElement = document.getElementById("workButton");
let attemptEducationButton: HTMLElement = document.getElementById("attemptEducationButton");

// Style
let successColor: string = "lightgreen";
let failColor: string = "tomato";
let neutralColor: string = "lightsteelblue";

// Dialog box text
let memeSuccessText: string = "<b>Meme Success!</b>";
let memeFailureText: string = "<b>Meme Failure...</b>";
let trainMemeryText: string = "<b>Memery Skill Increased!</b><br>+2% meme chance";
let trainMemeryErrorText: string = "<b>Can't Train Memery!</b><br>Your memery skill is maxed";
let workText: string = "<b>Work Complete!</b><br>$" + salary.toString() + " earned";
let educationSuccessText: string = "<b>Education Successful!</b><br>Salary increased by $" + raise.toString();
let educationFailureText: string = "<b>Education Failure...</b>";

// Dialog box icons
let attemptMemeIcon: string = "fas fa-paint-brush";
let trainMemeryIcon: string = "fas fa-biking";
let workIcon: string = "fas fa-briefcase";
let educationIcon: string = "fas fa-book";


/////////////
// Imports //
/////////////

import { popUpDialogBoxAnim } from "./animation";


//////////
// Game //
//////////

function attemptMeme() {
	if (Math.random() < memeChance) {
		memes += 1;
		showDialogBox(memeSuccessText, successColor, attemptMemeIcon);
		gameLoop();
	}

	else {
		showDialogBox(memeFailureText, failColor, attemptMemeIcon);
		gameLoop();
	}
}

function trainMemery() {
	if (memeChance >= 1.0) {
		showDialogBox(trainMemeryErrorText, neutralColor, trainMemeryIcon);
	}

	else {
		memeChance += 0.02;
		showDialogBox(trainMemeryText, successColor, trainMemeryIcon);
		gameLoop();
	}
}

function work() {
	cash += salary;
	showDialogBox(workText, successColor, workIcon);
	gameLoop();
}

function attemptEducation() {
	if (Math.random() < raiseChance) {
		salary += raise;
		showDialogBox(educationSuccessText, successColor, educationIcon);
		gameLoop();
	}
	else {
		showDialogBox(educationFailureText, failColor, educationIcon);
		gameLoop();
	}
}

function addGameButtonListeners() {
	attemptMemeButton.addEventListener("click", attemptMeme, false);
	trainMemeryButton.addEventListener("click", trainMemery, false);
	workButton.addEventListener("click", work, false);
	attemptEducationButton.addEventListener("click", attemptEducation, false);
}

function gameLoop() {
	updateUI();
}


////////
// UI //
////////

// Initialize UI to default values
function initUI() {
	billsCounter.innerHTML = "$" + Math.round(bills).toString();
	raiseCounter.innerHTML = "$" + Math.round(raise).toString();
	raiseChanceCounter.innerHTML = Math.round(raiseChance * 100).toString() + "%";

	updateUI();
}

// Update UI counters
function updateUI() {
	memesCounter.innerHTML = Math.round(memes).toString();
	memeChanceCounter.innerHTML = Math.round(memeChance * 100).toString() + "%";
	cashCounter.innerHTML = "$" + Math.round(cash).toString();
	salaryCounter.innerHTML = "$" + Math.round(salary).toString();
    return;
}

// Update dialog box text and show dialog box
function showDialogBox(text: string = "", color: string = neutralColor, icon: string = "") {
	dialogBoxText.innerHTML = text;
	dialogBox.style.backgroundColor = color;
	dialogBoxIcon.className = icon;

	popUpDialogBoxAnim();
}


///////////
// Debug //
///////////

// Set values to max for UI testing
function uiTestMax() {
    memes = 10;
    cash = 8888;
    memeChance = 1;
    salary = 8888;
}


//////////
// Main //
//////////

initUI();
addGameButtonListeners();
