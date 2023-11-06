console.log("Exercise 36\n");

/*
1.T-Shirt: Write a function called make_shirt() that accepts a size and the 
text of a message that should be printed on the shirt. 
2. The function should print a sentence summarizing the size of the shirt and 
the message printed on it. Call the function.
*/

//message printed on the shirt
let shirt_Message : string = "HOLD ON, Let Me OVERTHINK! This ";

//Arrow function Syntax :
//var variable = (param1: type, ...other params): return_type => {
 // code for the function  };

let make_shirt = (  shirt_Sizes : string, shirt_Message  : string) =>{
    console.log(`Sizes   : ${shirt_Sizes}\nMessage : ${shirt_Message}\n`);
                

}

// call function
let shirt_Sizes: string ;

shirt_Sizes = "Small";
make_shirt(shirt_Sizes, shirt_Message);

shirt_Sizes = "Medium";
make_shirt(shirt_Sizes, shirt_Message);

shirt_Sizes = "Large";
shirt_Message = "Hold On";
make_shirt(shirt_Sizes, shirt_Message);



