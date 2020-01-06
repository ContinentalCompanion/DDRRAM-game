/////////////
// Imports //
/////////////

import { gameLets } from '../../../game/game.lets';
import { formatPercent, formatUsd } from "../../../game/utility/numberUtils";


//////////////////////
// Inventory Blocks //
//////////////////////

export const inventoryBlocks = [
    {
        title: "Memes",
        items: [
            {
                icon: "fas fa-clipboard-check",
                counterId: "memesCounter",
                tooltipTitle: "Memes",
                tooltipDesc: "Number of memes created.<br>Create 10 to win.",
                value: gameLets.memes,
                valueType: "raw",
                text: ""
            },
            {
                icon: "fas fa-wheelchair",
                counterId: "memeChanceCounter",
                tooltipTitle: "Memery Skill",
                tooltipDesc: "Chance to create a meme.<br>Create 10 to win.",
                value: gameLets.memeChance,
                valueType: "percent",
                text: ""
            }
        ]
    },
    {
        title: "Cash",
        items: [
            {
                icon: "fas fa-coins",
                counterId: "cashCounter",
                tooltipTitle: "Cash",
                tooltipDesc: "Current cash.<br>Used to pay bills.",
                value: gameLets.cash,
                valueType: "usd",
                text: ""
            },
            {
                icon: "fas fa-business-time",
                counterId: "salaryCounter",
                tooltipTitle: "Salary",
                tooltipDesc: "Money earned from Working.<br>Improved by Attempt Education.",
                value: gameLets.salary,
                valueType: "usd",
                text: ""
            },
        ]
    },
    {
        title: "Stats",
        items: [
            {
                icon: "fas fa-shopping-basket",
                counterId: "billsCounter",
                tooltipTitle: "Bills",
                tooltipDesc: "Amount due every week.<br>Failure to pay results in defeat.",
                value: gameLets.bills,
                valueType: "usd",
                text: ""
            },
            {
                icon: "fas fa-money-check",
                counterId: "raiseCounter",
                tooltipTitle: "Raise Amount",
                tooltipDesc: "Amount your salary increases<br>from Attempt Education.",
                value: gameLets.raise,
                valueType: "usd",
                text: ""
            },
            {
                icon: "fas fa-fax",
                counterId: "raiseChanceCounter",
                tooltipTitle: "Raise Chance",
                tooltipDesc: "Chance to increase salary<br>with Attempt Education.",
                value: gameLets.raiseChance,
                valueType: "percent",
                text: ""
            },
        ]
    }
]

export function updateInventoryValues() {
    inventoryBlocks[0].items[0].value = gameLets.memes;
    inventoryBlocks[0].items[1].value = gameLets.memeChance;
    inventoryBlocks[1].items[0].value = gameLets.cash;
    inventoryBlocks[1].items[1].value = gameLets.salary;
    inventoryBlocks[2].items[0].value = gameLets.bills;
    inventoryBlocks[2].items[1].value = gameLets.raise;
    inventoryBlocks[2].items[2].value = gameLets.raiseChance;
}

export function updateInventoryText() {
    for (let inventoryBlock of inventoryBlocks) {
        for (let item of inventoryBlock.items) {
            switch (item.valueType) {
                default:
                    item.text = item.value.toString();
                    break;
                case "raw":
                    item.text = item.value.toString();
                    break;
                case "percent":
                    item.text = formatPercent(item.value);
                    break;
                case "usd":
                    item.text = formatUsd(item.value);
                    break;
            }
        }
    }
}
