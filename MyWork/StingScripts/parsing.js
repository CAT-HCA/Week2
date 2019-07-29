/*
*This function will extract first and last name from a string by finding indexOf()
* @param fullName (string) - the full name inputted by the user
* @return firstName (string) - the extracted first name
* @return lastName (string) - the extracted last name
*/

"use strict";

//variables

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

function parseAndDisplayName(name)
{
    let pos = name.indexOf(" ");

    var firstName = name.substring(0, pos);
    var lastName = name.substring(pos+1);
    var message = "First Name: " + firstName + "\nLast Name: " + lastName;
    return console.log(message);
}


