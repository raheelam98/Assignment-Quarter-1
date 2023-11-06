console.log("Exercise 28\n");

/*  
Stages of Life: Write an if-else chain that determines a person’s stage of life.
 Set a value for the variable age, and then:
1• If the person is less than 2 years old,
 print a message that the person is a baby.
2• If the person is at least 2 years old but less than 4, 
print a message that the person is a toddler.
3• If the person is at least 4 years old but less than 13, 
print a message that the person is a kid.
4• If the person is at least 13 years old but less than 20,
 print a message that the person is a teenager.
5• If the person is at least 20 years old but less than 65, 
print a message that the person is an adult.
6• If the person is age 65 or older, print a message that the person is an elder.
*/

let age1 : number;

age1  = 3;
console.log(`If age is ${age1}`)
if ( age1 < 2 ){
    console.log("Person is baby\n");
} else if (age1 < 4 ) {
    console.log("Person is toddler\n");
} else if ( age1 < 13 ){
    console.log("Person is Kid \n");
} else if ( age1 < 20 ){
    console.log("Person is teenager \n");
} else if ( age1 < 65 ){
    console.log("Person is adult \n");
} else {
    console.log("Person is elder \n");
}

age1  = 25;
console.log(`If age is ${age1}`)
if ( age1 < 2 ){
    console.log("Person is baby\n");
} else if (age1 < 4 ) {
    console.log("Person is toddler\n");
} else if ( age1 < 13 ){
    console.log("Person is Kid \n");
} else if ( age1 < 20 ){
    console.log("Person is teenager \n");
} else if ( age1 < 65 ){
    console.log("Person is adult \n");
} else {
    console.log("Person is elder \n");
}

age1  = 41;
console.log(`If age is ${age1}`)
if ( age1 < 2 ){
    console.log("Person is baby\n");
} else if (age1 < 4 ) {
    console.log("Person is toddler\n");
} else if ( age1 < 13 ){
    console.log("Person is Kid \n");
} else if ( age1 < 20 ){
    console.log("Person is teenager \n");
} else if ( age1 < 65 ){
    console.log("Person is adult \n");
} else {
    console.log("Person is elder \n");
}

export{}