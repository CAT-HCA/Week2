// Description: This function will parse a product code
//Author: Corinne Trudeau

"use strict";

let obj1 = {
    productId : "1234",
    productName :"fidget spinner",
    unitPrice : "5",
    quantity : "10"
};

let str = JSON.stringify(obj1);
console.log(str);

let obj2 = JSON.parse(str);
console.log(obj2);
