// Description: This script uses a for loop to display a message
//Author: Corinne Trudeau

"use strict";

/*
*This function will return an array of testScores
* @param contact (string) - the users full address
* @return testScores (number) - returns test scores from the array
*/

function getAverage(testScores)
{
    let sum = 0;
    for (let i = 0; i <testScores.length; i++)
    {
        sum = sum + testScores[i];
    }
    let average = sum/testScores.length
    return average;
}

let scores = [99, 100, 93, 91, 86, 93, 87];
let scoreAverage = getAverage(scores);
console.log(scoreAverage);
