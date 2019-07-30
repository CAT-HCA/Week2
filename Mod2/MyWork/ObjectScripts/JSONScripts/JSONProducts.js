// Description: This script will stringify a JSON JavaScript object and 
// parse a JSON object into a Javascript object
//Author: Corinne Trudeau
"use strict";

//JavaScript object
let obj1 = {
    productId : "1234",
    productName :"fidget spinner",
    unitPrice : "5",
    quantity : "10"
};

//displaying JSON object
let str = JSON.stringify(obj1);
console.log(str);
//displaying JavaScript object
let obj2 = JSON.parse(str);
console.log(obj2);
