console.log("Exercise 25");

/* 
Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 
'green', 'yellow', or 'red'.
2• Write an if statement to test whether the alien’s color is green. 
If it is, print a message that the player just earned 5 points.
3• Write one version of this program that passes the if test and another 
that fails. (The version that fails will have no output.)
*/

//Alien Colors #1:

let alien_color = 'green';

//2. color gree : earned 5 points
if (alien_color == 'green'){
    console.log("Wow! Color is green : earned 5 point");
}

//3. other color nothing

if (alien_color !== 'green'){
    //console.log("Color is not green : fail");
}

if (alien_color == 'red'){
    //console.log("Color is red : fail");
}

if (alien_color == 'yellow'){
    //console.log("Color is yellow : fail");
}
