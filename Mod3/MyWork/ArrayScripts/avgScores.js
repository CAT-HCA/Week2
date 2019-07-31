// Description: This script uses sorting functions to find average, 
// median, high and low of an array of test scores
//Author: Corinne Trudeau

"use strict";

/*
*This function will return an array of testScores
* @param testScores (array) - the aray of test scores
* @return average (number) - returns average of the test scores in the array
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


/*
* This function will assist in sorting the scores by 
* comparing 2 scores to see which is smaller
* @param a (number) - the first value from the array to compare (i)
* @param b (number) - the second value from the array to compare (i+1)
* @return 1 or -1 (number) - returns a negative or positive 1 to send back to sort
*/
function compareScoresAscending (a,b)
{
    if (a < b)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

/*
*This function will return an array of testScores
* @param testScores (array) - the aray of test scores
* @return median (number) - returns median of the test scores in the array
*/
function getMedian(testScores)
{
    var median;
    let length = testScores.length;
    if (length % 2 != 0) // length of array is an odd number
    {
        median = testScores[Math.floor(length/2)]
    }
    else //length of array is even number (take average of middle 2 numbers)
    {
        var sumMidNums = testScores[length/2] + testScores[(length/2)- 1]
        median = sumMidNums / 2;
    }
    return median;
}



let scores = [99, 100, 93, 91, 86, 93];

let scoreAverage = getAverage(scores);
console.log("Average : " + scoreAverage);

scores = scores.sort(compareScoresAscending);

let scoreMedian = getMedian(scores);
console.log("Median : " + scoreMedian);

console.log("Lowest : " + scores[0]);
console.log("Highest : " + scores[(scores.length)-1])