"use strict";
//// Task # 29 ////
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
//that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_Fruit = ["Mango", "Apple", "Strawberry",];
// Checking for specific fruits in the array with If-else statments
//There are five IF-else list 
if (favorite_Fruit.includes('Mango')) {
    console.log("I really like Mango!");
}
if (favorite_Fruit.includes('Apple')) {
    console.log("I really like  Apples!");
}
if (favorite_Fruit.includes('Strawberry')) {
    console.log("I really like Strawberries!");
}
if (favorite_Fruit.includes('Watermalon')) {
    console.log("I really like bananas!");
}
else {
    console.log("Watermalons are not in my list of favorite fruits.");
}
if (favorite_Fruit.includes('grape')) {
    console.log("I really like grapes!");
}
else {
    console.log("Grapes are not in my list of favorite fruits.");
}
