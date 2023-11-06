console.log("Exercise 29 error 'includes' does not exist on type 'string[]'  \n");

/*
Favorite Fruit: Make a array of your favorite fruits, and then write 
a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit
 is in your array. If the fruit is in your array, the if block should print a statement, 
 such as You really like bananas!
*/

//Make a array of your favorite fruits

let favorite_fruits : string[] = ["Orange", "Mango", "Banana"];
//favorite_fruits = ["Orange", "Mango", "Banana"];

//series of independent if statements that check for certain fruits in your array
if (favorite_fruits.includes("Orange")){
    console.log("I really like Orange!\n");
}

if (favorite_fruits.includes("Banana")){
    console.log("I really like Banana!\n");
}

if (favorite_fruits.includes("Mango")){
    console.log("I really like Mango!\n");
}

if (favorite_fruits.includes("Pomegranate")){
    console.log("I really like Pomegranate!\n");
}

if (favorite_fruits.includes("Guava")){
    console.log("I really like Guava!\n");
}

if (favorite_fruits.includes("Cantaloupe")){
    console.log("I really like Cantaloupe!\n");
}


