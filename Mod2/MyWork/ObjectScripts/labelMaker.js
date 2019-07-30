// Description: This function will create a mailing address label using object scripts
//Author: Corinne Trudeau

"use strict";

/*
*This function will extract supplier code, product number and size from a string 
* @param contact (string) - the users full address
* @return name (string) - name
* @return address (string) - house number and street name
* @return city (string) - city 
* @return state (string) - state
* @return zip (string) - 5 digit zip code (string to account for zips starting with a "0")
*/
function printContact(contact){

    var message = console.log(contact.name + "\n" + contact.address + "\n" + 
    contact.city + ", " + contact.state + " " + contact.zip);
    return message;
}

//object being passed into function
var contact1 = {name:"Pursalane Faye", address:"121 Main Street", city:"Benbrook", state:"Texas", zip:"76126"};
//calling the function
printContact(contact1);