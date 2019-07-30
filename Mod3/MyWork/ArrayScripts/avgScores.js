// Description: This script uses a for loop to display a message
//Author: Corinne Trudeau

"use strict";

/*
*This function will return an array of testScores
* @param contact (string) - the users full address
* @return testScores (number) - returns test scores from the array
*/
function getScores ()
{
                   
    return testScores;
}

function getAverage(testScores)
{
    let sum = 0
    for (let i = 0; i <testScores.length; i++)
    {
        sum = sum + testScores[i];
    }
    console.log(sum/testScores.length)
}


let average = getScores();
getAverage(average);
