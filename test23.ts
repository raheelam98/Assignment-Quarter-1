console.log("Exercise 23");

/*
Conditional Tests: Write a series of conditional tests. Print a statement 
describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand 
why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and 
another 5 tests evaluate to False.
*/

// Given condition
let car = 'subaru';

//least 5 tests evaluate to True (given condition)

console.log("Is car === 'subaru'? I predict True."); 
console.log(car === 'subaru'); // true
console.log("Name and opperater is correct\n");

// Oprater is different with correct name
console.log("Is car !== 'subaru'? I predict Flase."); 
console.log(car !== 'subaru' ); // flase
console.log("Oprater is different with correct name\n");

// change car name
console.log("Is car == 'Honda'? I predict flase."); 
console.log(car == 'Honda'); // false
console.log("Name is different\n");

// Oprater is correct with different name
console.log("Is car !== 'Honda'? I predict True."); 
console.log(car !== 'Honda' ); // true
console.log("Oprater is correct with different name\n");

// change spelling 
console.log("Is car === 'subaruu'? I predict Flase."); 
console.log(car === 'subaruu' ); // flase
console.log("Spelling is different\n");

// change spelling and opperator
console.log("Is car !== 'subaruu'? I predict True."); 
console.log(car !== 'subaruu' ); // True
console.log("Spelling is different but oprater is corect\n");

//change first letter is capital
console.log("Is car === 'Subaru'? I predict Flase."); 
console.log(car === 'Subaru'); // flase
console.log("First letter is capital\n");

//first letter is capital with opprater is different
console.log("Is car !== 'Subaru'? I predict True."); 
console.log(car !== 'Subaru'); // true
console.log("First etter is capital with correct opprater \n");

//First letter missing
console.log("Is car == 'ubaru'? I predict Flase."); 
console.log(car == 'ubaru'); // Flase
console.log("First letter missing \n");

console.log("Is car <= 'subaru'? I predict True."); 
console.log(car <= 'subaru'); // true
console.log("Name same but condition is different\n");

console.log("Is car >= 'subaru'? I predict True."); 
console.log(car >= 'subaru'); // true
console.log("Name same but condition is different\n");
