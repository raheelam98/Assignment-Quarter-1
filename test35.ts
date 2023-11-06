console.log("Exercise 35\n");

/*
1 . Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the 
name of each animal. 
2 • Modify your program to print a statement about each animal, 
such as A dog would make a great pet. • Add a line at the end of your program stating
 what these animals have in common. You could print a sentence such as Any of 
 these animals would make a great pet!
*/

//1. Three different animals that have a common characteristic

const animals : string[] = [ "Camel", "Cow", "Goat"];

for( let animal of animals ){
    console.log(animal);
}

//2 • Modify your program to print a statement about each animal
for(let animal of animals){
    if ( animal === 'Camel'){
        console.log(`\n${animal} has hump on their back and long curved neck.`);
    }
    else if  ( animal === 'Cow'){
        console.log(`${animal} has wide mouth and specialized teeth for eating tough vegetation.`);
    }
    else {
        console.log(`${animal} has horns and straighter hair.\n `);
    }
}

console.log(` ${animals} are good source of milk and meat.\n`)


