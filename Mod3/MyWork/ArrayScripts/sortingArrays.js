// Description: This script uses a while loop to display a message
//Author: Corinne Trudeau

"use strict";

/*
* This function will assist in sorting an array by the name field;
* comparing 2 names to see which comes 1st alphabetically
* @param a (string) - the first value from the array to compare (i)
* @param b (string) - the second value from the array to compare (i+1)
* @return 1 or -1 (number) - returns a negative or positive 1 to 
* convert strings to number to send back to sort
*/
function compareNamesAscending (a,b)
{
    if (a.name < b.name)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

/*
* This function will assist in sorting an array by the name field;
* comparing 2 names to see which comes 2nd alphabetically
* @param a (string) - the first value from the array to compare (i)
* @param b (string) - the second value from the array to compare (i+1)
* @return 1 or -1 (number) - returns a negative or positive 1 to 
* convert strings to number to send back to sort
*/
function compareNamesDescending (a,b)
{
    if (a.name > b.name)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

/*
* This function will assist in sorting an array by the age field;
* comparing 2 ages to see which is smaller
* @param a (number) - the first value from the array to compare (i)
* @param b (number) - the second value from the array to compare (i+1)
* @return 1 or -1 (number) - returns a negative or positive 1 to send back to sort
*/
function compareAgesAscending (a,b)
{
    if (a.age < b.age)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

/*
* This function will assist in sorting an array by the age field;
* comparing 2 ages to see which comes 2nd alphabetically
* @param a (number) - the first value from the array to compare (i)
* @param b (number) - the second value from the array to compare (i+1)
* @return 1 or -1 (number) - returns a negative or positive 1 to send back to sort
*/
function compareAgesDescending (a,b)
{
    if (a.age > b.age)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}


//Calling the functions
let objs = [
    {name:"Dana", age:60},
    {name:"Natalie", age:35},
    {name:"Brittany", age:33},
    {name:"Zachary", age:29}

];

//Output
console.log(objs.sort(compareNamesAscending));
console.log(objs.sort(compareNamesDescending));
console.log(objs.sort(compareAgesAscending));
console.log(objs.sort(compareAgesDescending));