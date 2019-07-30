// Description: This function will parse a product code
//Author: Corinne Trudeau

"use strict";

/*
*This function will extract supplier code, product number and size from a string 
* @param code (string) - the full part code
* @param supplier (string) - the supplier code (all digits before the colon)
* @param productNumber (string) - the product number (found between the colon and the dash)
* @param size (string) - the product size (found after the dash)
* @return obj (object) - the object containing all parameters
*
*/
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

//calling the function
var partCode1 = "XYZ:1234-L";
var part1 = parsePartCode(partCode1);

//displaying the output
return console.log("The size " + part1.size + " part " + part1.productNumber + " is supplied by " + part1.supplier);

