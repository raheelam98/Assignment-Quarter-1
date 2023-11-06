console.log("Exercise 27\n");

/* 
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
1• If the alien is green, print a message that the player earned 5 points.
2• If the alien is yellow, print a message that the player earned 10 points.
3• If the alien is red, print a message that the player earned 15 points.
4• Write three versions of this program, making sure each message is printed for 
the appropriate color alien.
*/

let alien_color : string;
alien_color = 'green';

console.log("1st Version\n");
if ( alien_color === "green"){
    console.log(`Color is ${alien_color}: Player earned 5 points \n`);
}else if ( alien_color === 'yellow'){
    console.log(`Color is ${alien_color}: Player earned 10 points \n`);
}else if ( alien_color === 'red'){
    console.log(`Color is ${alien_color}: Player earned 15 points \n`);
}else{
    console.log("Alien color is unknow");
}

alien_color = 'yellow';

console.log("2nd Version\n");
if ( alien_color === "green"){
    console.log(`Color is ${alien_color}: Player earned 5 points \n`);
}else if ( alien_color === 'yellow'){
    console.log(`Color is ${alien_color}: Player earned 10 points \n`);
}else if ( alien_color === 'red'){
    console.log(`Color is ${alien_color}: Player earned 15 points \n`);
}else{
    console.log("Alien color is unknow");
}

alien_color = 'red';
console.log("3rd Version\n");
if ( alien_color === "green"){
    console.log(`Color is ${alien_color}: Player earned 5 points \n`);
}else if ( alien_color === 'yellow'){
    console.log(`Color is ${alien_color}: Player earned 10 points \n`);
}else if ( alien_color === 'red'){
    console.log(`Color is ${alien_color}: Player earned 15 points \n`);
}else{
    console.log("Alien color is unknow");
}


export{}