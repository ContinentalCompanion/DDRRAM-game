/////////////
// Imports //
/////////////

import { gameLets } from "../../../game/game.lets";
import { uiLets, gameActionIcons } from "../../../game/ui/ui.lets";


//////////////////
// Game Actions //
//////////////////

export const gameActionDialogBoxes = [
    {   // Meme
        icon: gameActionIcons.memeIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.failColor,
        successText: "<b>Meme Success!</b>",
        failText: "<b>Meme Failure...</b>",

        update: function() {}
    },
    {   // Train Memery
        icon: gameActionIcons.trainMemeryIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.neutralColor,
        successText: "<b>Memery Skill Increased!</b><br>+" +
            (gameLets.memeChanceIncrease * 100).toString() + "% meme chance",
        failText: "<b>Can't Train Memery!</b>" + "<br>Your memery skill is maxed",

        update: function() {}
    },
    {   // Work
        icon: gameActionIcons.workIcon,
        successColor: uiLets.successColor,
        failColor: "",
        successText: "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned",
        failText: "",

        update: function() {
            this.successText = "<b>Work Complete!</b><br>$" + gameLets.salary.toString() + " earned";
        }
    },
    {   // Education
        icon: gameActionIcons.educationIcon,
        successColor: uiLets.successColor,
        failColor: uiLets.failColor,
        successText: "<b>Education Successful!</b><br>Salary increased by $" + gameLets.raise.toString(),
        failText: "<b>Education Failure...</b>",

        update: function() {}
    }
]

export function updateGameActionDialogBoxes() {
    for (let gameActionDialogBox of gameActionDialogBoxes)
        gameActionDialogBox.update();
}
