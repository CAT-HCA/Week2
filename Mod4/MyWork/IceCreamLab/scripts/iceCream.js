// Description: These functions will calculate the future value of a one-time deposit
//assuming compound interest (compounding annually)
//Author: Corinne Trudeau
"use strict";

/*
*This is the window.onload event handler
*/
window.onload = function ()
{
    let scoopsField = document.getElementById("inputNumScoops");
    let hotFudgeField = document.getElementById("selectHotFudge");
    let sprinklesField = document.getElementById("selectSprinkles");
    let whipField = document.getElementById("selectWhip");

    let calcBtn = document.getElementById("calcBtn");

    calcBtn.onclick = function ()
    {
        //Get Data from UI
        let numScoops = Number(scoopsField.value);

        //Process Data
        let iceCreamCost = getIceCreamCost(numScoops);
        let toppingCost = getToppingCost(hotFudgeField.checked, sprinklesField.checked, whipField.checked);
        let totalCost = iceCreamCost + toppingCost;


        //Display results
        totalCost = "Price: $" + totalCost.toFixed(2);
        document.getElementById("priceOutputField").innerHTML = totalCost;
    }
}

function getIceCreamCost(numScoops)
{
    let iceCreamCost = 0;
    switch (numScoops)
    {
        case 1:
            iceCreamCost = 2.50;
            break;
        case 2:
            iceCreamCost = 3.75;
            break;
        case 3:
            iceCreamCost = 5.00;
            break;
        default:
            alert("Maximum number of scoops is 3");
            break; 
    }
    return iceCreamCost;
}

function getToppingCost(hotFudge, sprinkles, whip)
{

    let toppingCost = 0;
    if (hotFudge)
    {
        toppingCost += 1.25;
    }
    if (sprinkles)
    {
        toppingCost += 0.25;
    }
    if (whip)
    {
        toppingCost += 0.75;
    }
    return toppingCost;
}

