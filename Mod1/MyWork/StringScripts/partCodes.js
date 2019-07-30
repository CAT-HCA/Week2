// Description: These functions will parse out a supplier code, product number and size from a full product code
//Author: Corinne Trudeau

/*
*This function will extract supplier code, product number and size from a string 
* @param code (string) - the full part code
* @return supplierCode (string) - the supplier code (all digits before the colon)
* @return productNumber (string) - the product number (found between the colon and the dash)
* @return size (string) - the product size (found after the dash)
*/
function parseCode(code)
{
    var code;
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);
    var message = "The size " + size + " part " + productNumber + " is supplied by " + supplier;
    return console.log(message);
}
/*
*This function will extract supplier code from the full string 
* @param code (string) - the full part code
* @return supplierCode (string) - the supplier code (all digits before the colon)
*/
function getSupplier(code)
{
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);
    return supplier;
}
/*
*This function will extract product number from the full string 
* @param code (string) - the full part code
* @return productNumber (string) - the product number (found between the colon and the dash)
*/
function getProductNumber(code)
{
    let pos = code.indexOf(":")
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos+1, pos2 );
    return productNumber;
}
/*
*This function will extract size from the full string 
* @param code (string) - the full part code
* @return supplierCode (string) - the supplier code (all digits before the colon)
* @return productNumber (string) - the product number (found between the colon and the dash)
* @return size (string) - the product size (found after the dash)
*/
function getSize(code)
{
    let pos2 = code.indexOf("-");
    let size = code.substring(pos2+1);
    return size;
}

parseCode("ACME:123-L");
parseCode("DI:12345-M");
parseCode("ACE:1-12");


