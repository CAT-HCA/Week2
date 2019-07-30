// Description: This function will parse a product code
//Author: Corinne Trudeau

"use strict";

function parsePartCode(code){
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos+1, pos2 );
    let size = code.substring(pos2+1);
    let obj = {
        supplier: supplier,
        productNumber: productNumber,
        size: size,
    };
    return obj;
}

var partCode1 = "XYZ:1234-L";
var part1 = parsePartCode(partCode1);
return console.log("The size " + part1.size + " part " + part1.productNumber + " is supplied by " + part1.supplier);

