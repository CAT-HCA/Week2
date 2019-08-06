"use strict";

window.onload = function ()
{
    let zipCodeField = document.getElementById("inputZip");
    let calcBtn = document.getElementById("calcBtn");

    /*
    *This is the button click event handler
    */
    calcBtn.onclick = function ()
    {
    let codes = zipCodeField.nodeValue;

    for (let i = 0; i < codes.length; i++)
    {
        let zipCode = codes[i];
        validateZip(zipCode, outputField);
    }

}

function validateZip(zipCode, outputField)
{
    let zipCodePattern = /^(?<full>(?<part1>[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1})(?:[ ](?=\d))?(?<part2>\d{1}[A-Z]{1}\d{1}))$/;

    if (zipCodePattern.test(zipCode))
    {
        result = true;
    }
    else{
        result = false;
    }
    let result = document.getElementById("validationOutput").innerHTML;
}

getZipCodes();

