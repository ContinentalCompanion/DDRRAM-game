/////////////
// Imports //
/////////////

import { gameLets } from "../../../game/game.lets";
import { uiLets, gameActionIcons } from "../../../game/ui/ui.lets";


//////////////////
// Game Actions //
//////////////////

export const dialogBoxes = [
    {   // [0] Meme
        icon: gameActionIcons.memeIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.failColor,
        successText: "<b>Meme Success!</b>",
        failText: "<b>Meme Failure...</b>",

        update: function() {}
    },
    {   // [1] Train Memery
        icon: gameActionIcons.trainMemeryIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.neutralColor,
        successText: "<b>Memery Skill Increased!</b><br>+" +
            (gameLets.memeChanceIncrease * 100).toString() + "% meme chance",
        failText: "<b>Can't Train Memery!</b>" + "<br>Your memery skill is maxed",

        update: function() {}
    },
    {   // [2] Work
        icon: gameActionIcons.workIcon,
        successColor: uiLets.successColor,
        failColor: "",
        successText: "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned",
        failText: "",

        update: function() {
            this.successText = "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned";
        }
    },
    {   // [3] Education
        icon: gameActionIcons.educationIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.failColor,
        successText: "<b>Education Successful!</b><br>Salary increased by $" + gameLets.raise.toString(),
        failText: "<b>Education Failure...</b>",

        update: function() {}
    }
]

export function updateDialogBoxes() {
    for (let gameActionDialogBox of dialogBoxes)
        gameActionDialogBox.update();
}
