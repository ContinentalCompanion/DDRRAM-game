/////////////////////////////////////////////
//                 game.ts                 //
// --------------------------------------- //
// Author: Christien Ayson                 //
// Description: Utility functions for #'s  //
//                                         //
/////////////////////////////////////////////


/////////////
// Imports //
/////////////


//////////////////////
// Format To String //
//////////////////////

export function formatPercent(data: number) {
    return Math.round(data * 100).toString() + "%";
}

export function formatUsd(data: number) {
    return ("$" + data.toString());
}


//////////////////////
// Number Utilities //
//////////////////////

export function numEq(n: number, m: number) {
    var delta = Math.abs(n - m);
    return (delta < Number.EPSILON);
}
