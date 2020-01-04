/////////////
// Imports //
/////////////

import { gameActionIcons } from "../../../game/ui/ui.lets";


//////////////////
// Game Buttons //
//////////////////

export const gameButtons = [
    {
        id: 'memeButton',
        name: 'Attempt Meme',
        icon: gameActionIcons.memeIcon,
        description: 'Spend the day<br>attempting to meme.<br>Success chance can be<br>improved by Train Memery.',
        action: 'meme'
    },
    {
        id: 'trainMemeryButton',
        name: 'Train Memery',
        icon: gameActionIcons.trainMemeryIcon,
        description: 'Spend the day<br>improving memery skills.<br>Increases Attempt Meme<br>success chance by 2%.',
        action: 'trainMemery'
    },
    {
        id: 'workButton',
        name: 'Work',
        icon: gameActionIcons.workIcon,
        description: 'Go to work for the day.<br>Earns money equal<br>to your salary.',
        action: 'work'
    },
    {
        id: 'educationButton',
        name: 'Attempt Education',
        icon: gameActionIcons.educationIcon,
        description: 'Spend the day attempting<br>to improve your career.<br>25% chance to increase<br>salary by $2.',
        action: 'education'
    }
];
