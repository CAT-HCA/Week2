// Description: Practice with parsing dates
//Author: Corinne Trudeau
"use strict";

var bootcampStarts = new Date("July 22, 2019");
var bootcampEnds = new Date("September 6, 2019");

const msecPerDay = 1000 * 60 * 60 *24;

var elapsedMSec = bootcampEnds.getTime() - bootcampStarts.getTime();
var dayDiff = elapsedMSec / msecPerDay;
var numberDays = Math.ceil(dayDiff);

console.log("The number of days between " + bootcampStarts + " and " + bootcampEnds + " is " + numberDays + " days.");
