/////////////
// Imports //
/////////////

import { gameLets } from "../../../game/game.lets";
import { uiLets, gameActionIcons } from "../../../game/ui/ui.lets";


/////////////
// Classes //
/////////////

export class dialogBox {
    icon: string;
    successColor: string;
    failColor: string;
    successText: string;
    failText: string;
    update;  // function to update vars in text

    constructor(icon: string,
                successColor: string,
                failColor: string,
                successText: string,
                failText: string,
                update) {
        this.icon = icon;
        this.successColor = successColor;
        this.failColor = failColor;
        this.successText = successText;
        this.failText = failText;
        this.update = update;
    }
}


//////////////////
// Dialog Boxes //
//////////////////

export const memeDialogBox = new dialogBox (
    gameActionIcons.memeIcon,  // icon
    uiLets.successColor,       // successColor
    uiLets.failColor,          // failColor
    "<b>Meme Success!</b>",    // successText
    "<b>Meme Failure...</b>",  // failText
    function() {}              // update
)

export const trainMemeryDialogBox = new dialogBox (
    gameActionIcons.trainMemeryIcon,
    uiLets.successColor,
    uiLets.neutralColor,
    "<b>Memery Skill Increased!</b><br>+" + (gameLets.memeChanceIncrease * 100).toString() + "% meme chance",
    "<b>Can't Train Memery!</b>" + "<br>Your memery skill is maxed",
    function() {}
)

export const workDialogBox = new dialogBox (
    gameActionIcons.workIcon,
    uiLets.successColor,
    uiLets.null,
    "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned",
    uiLets.null,

    function() {
        this.successText = "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned";
    }
)

export const educationDialogBox = new dialogBox (
    gameActionIcons.educationIcon,
    uiLets.successColor,
    uiLets.failColor,
    "<b>Education Successful!</b><br>" + "Salary increased by $" + gameLets.raise.toString(),
    "<b>Education Failure...</b>",
    function() {}
)
