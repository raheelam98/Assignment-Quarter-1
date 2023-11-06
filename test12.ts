console.log("Exercise 12\n");

/*
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, 
 print a message to them. 
 The text of each message should be the same, 
 but each message should be personalized with the person’s name.
*/

console.log("for of loop")
let nameArray1 = ["Assad", "Anas", "Raza"];

for( let nickname of nameArray1){
    console.log(`Hi ${nickname}  , you are doing well`)
}

// output:
// Hi Assad  , you are doing well
// Hi Anas  , you are doing well
// Hi Raza  , you are doing well



// Rest parameters :convert "," separated list into Array
//Rest is use when input has unknown values

console.log("\nRest Parameter ")

function greet(str:string , ...nameArray: string[] ){
    for (const nickname of nameArray){
        console.log(`${str}  ${nickname}`)
    }
}
greet("Hello ", "Assad", "Anas", "Raza");

//   Output
// Hello   Assad
// Hello   Anas
// Hello   Raza






export{}