console.log("Exercise 34\n");

/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.
1• Modify your for loop to print a sentence using the name of the pizza instead of 
printing just the name of the pizza. For each pizza you should have one line of output 
containing a simple statement like I like pepperoni pizza.
2• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and 
then an additional sentence, such as I really love pizza!
*/

//Store pizza names in a array
const pizzas: string[] = ["Cheese", "Fajita", "Pepperoni" ];

for (let i=0; i < pizzas.length; i++){
    console.log(` Favorite Pizza is ${pizzas[i]} \n`);
    //console.log(pizzas[i]);
}

//1• Modify your for loop to print a different sentence 
for (let i= 0; i < pizzas.length; i++){
    console.log(`I like ${pizzas[i]} Pizza\n`)
}

//2• Add a line at the end of your program
console.log(`I really love pizza!\n `)