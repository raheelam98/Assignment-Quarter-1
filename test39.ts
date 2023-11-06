console.log("Exercise 39\n");

/*
City Names: Write a function called city_country() that takes in the name of a city and 
its country. The function should return a string formatted like this:
"Lahore, Pakistan"
*/


//Arrow function Syntax :
//var variable = (param1: type, ...other params): return_type => {
 // code for the function  };

 const city_country2 = (city2: string, country2 : string) =>
 {
    return console.log(`${city2}, ${country2}`)
 }

 //function should return a string formatted like this: "Lahore, Pakistan"

 city_country2("Lahor", "Pakistan");

 city_country2("Sydney", "Australia");

 city_country2("London", "UK");