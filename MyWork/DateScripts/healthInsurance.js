// Description: Practice with parsing dates
//Author: Corinne Trudeau
"use strict";

var startDate = new Date("July 30, 2019");
const msecPerDay = 1000 * 60 * 60 *24;

var startDateMS = Date.parse(startDate);
var endDateMS = startDateMS + (90*msecPerDay);
let endDate = new Date (endDateMS);

console.log(endDate);
