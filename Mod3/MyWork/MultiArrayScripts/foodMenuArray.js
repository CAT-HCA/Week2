

"use strict";
//array of menu items
let foodOptions = [
    //breakfast items
    [{ item: "Sausage and Egg Biscuit", price: 3.49 },
    { item: "Bacon and Egg Bsicuit", price: 4.49 },
    { item: "Ham and Egg Bsicuit", price: 2.49 }],
    //lunch items
    [{ item: "Ham and Cheese Sandwich", price: 6.00 },
    { item: "Turkey and Cheese Sandwich", price: 5.49 },
    { item: "Roast Beef and Cheese Sandwich", price: 6.49 },
    { item: "Tuna Sandwich", price: 4.49 }],
    //dinner items
    [{ item: "Lasagna", price: 12.00 },
    { item: "Pizza", price: 8.49 },
    { item: "Sushi", price: 40.49 },
    { item: "Cheeseburger", price: 11.49 },
    { item: "Calzone", price: 10.49 }]
];

//user input of which type of menu, you want to see
let meal = 2;


var menuTitle;
if (meal == 0)
{
    menuTitle = "Breakfast Menu";
}
else if (meal == 1)
{
    menuTitle = "Lunch Menu";
}
else if (meal == 2)
{
    menuTitle = "Dinner Menu";
}

//displaying output of menu title
console.log(menuTitle);

var mealItemCount = foodOptions[meal].length;


for (let items = 0; items < mealItemCount; items++)
{
    //displaying output of menu items
    console.log(foodOptions[meal][items].item + " $ " + foodOptions[meal][items].price);
}

