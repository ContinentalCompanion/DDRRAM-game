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
        description: 'Spend the day attempting to meme. Success chance can be improved by Train Memery.',
        action: 'meme'
    },
    {
        id: 'trainMemeryButton',
        name: 'Train Memery',
        icon: gameActionIcons.trainMemeryIcon,
        description: 'Spend the day improving memery skills. Increases Attempt Meme success chance by 2%.',
        action: 'trainMemery'
    },
    {
        id: 'workButton',
        name: 'Work',
        icon: gameActionIcons.workIcon,
        description: 'Go to work for the day. Earns money equal to your salary.',
        action: 'work'
    },
    {
        id: 'educationButton',
        name: 'Attempt Education',
        icon: gameActionIcons.educationIcon,
        description: 'Spend the day attempting to improve your career. 25% chance to increase salary by $2.',
        action: 'education'
    }
];
