console.log("Exercise 38\n");

/*
Cities: Write a function called describe_city() that accepts the name of a city and 
its country. The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. 
Call your function for three different cities, 
at least one of which is not in the default country.
*/

//function : describe_city() that accepts the name of a city and its country.
function describe_City( city : string, country : string = "Pakistan"){
    console.log(` ${city} is in ${country}\n` );
}

//Call your function for three different cities
describe_City("Islamabad");

describe_City("London", "UK");

describe_City("Sydney", "Australia");



export{}

