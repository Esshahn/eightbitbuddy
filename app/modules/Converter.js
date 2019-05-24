
/*

    Various number converter functions

*/



/*
    These are used in the list views.
    The values get shortened to 255 max

*/

export function dec2HexShort (decValue) {
    return "$"+("0"+parseInt(decValue,10).toString(16)).slice(-2).toUpperCase();
}

export function dec2BinShort (decValue) {
    return "%"+("0000000"+parseInt(decValue,10).toString(2)).slice(-8);
}


/*

    Number converter

*/


export function dec2Hex (string) {
    return (parseInt(string,10).toString(16));
}

export function dec2Bin (string) {
    let number_cutoff = -8;
    if (parseInt(string,10) >= 256) number_cutoff = -16;
    return (("0000000000000000"+parseInt(string,10).toString(2)).slice(number_cutoff));
}

export function hex2Dec (string) {
    return (parseInt(string,16).toString(10));
}

export function hex2Bin (string) {
    let number_cutoff = -8;
    if (parseInt(string,16) >= 256) number_cutoff = -16;
    return (("0000000000000000"+parseInt(string,16).toString(2)).slice(number_cutoff));
}

export function bin2Dec (string) {
    return (parseInt(string,2).toString(10));
}

export function bin2Hex (string) {
    return (parseInt(string,2).toString(16));
}