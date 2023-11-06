console.log("Exercise 26\n");

/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.
1• If the alien’s color is green, print a statement that the 
player just earned 5 points for shooting the alien.
2• If the alien’s color isn’t green, print a statement that the 
player just earned 10 points.
3• Write one version of this program that runs the 
if block and another that runs the else block.
*/

//Alien Colors #2

let alien_color : string;
alien_color = 'green';

//1st version : 
//1. color green : earned 5 points

console.log(`1st version \n`)

if (alien_color == 'green'){
    console.log(`Color is ${alien_color} : WOW! Player just earned 5 points for shooting the alien \n`);
}else{
    console.log(`Color is not ${alien_color} : WOW! Player just earned 10 points for shooting the alien\n `);
}


//2nd version : 
//2. color is not green : earned 10 points

console.log(`2nd version \n`)

if (alien_color !== 'green'){
    console.log(`Color is ${alien_color} : WOW! Player just earned 5 points for shooting the alien \n`);
}else{
    console.log(`Color is not ${alien_color} : WOW! Player just earned 10 points for shooting the alien \n`);
}

export{}