// Description: This function will create a mailing address label using object scripts
//Author: Corinne Trudeau

"use strict";

function printContact(contact){

    var message = console.log(contact.name + "\n" + contact.address + "\n" + 
    contact.city + ", " + contact.state + " " + contact.zip);
    return message;
}
var contact1 = {name:"Pursalane Faye", address:"121 Main Street", city:"Benbrook", state:"Texas", zip:"76126"};
printContact(contact1);