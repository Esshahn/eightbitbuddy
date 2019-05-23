
/*

    Various number converter functions

*/


export function dec2Hex (decValue) {
    return "$"+("0"+parseInt(decValue,10).toString(16)).slice(-2).toUpperCase();
}

export function dec2Bin (decValue) {
    return "%"+("0000000"+parseInt(decValue,10).toString(2)).slice(-8);
}