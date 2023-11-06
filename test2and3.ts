/*
2) Personal Message: Store a person’s name in a variable, and
 print a message to that person. Your message should be simple, 
 such as, “Hello Eric, would you like to learn some Python today?”

 3)Name Cases: Store a person’s name in a variable, and then 
 print that person’s name in lowercase, uppercase, and titlecase.
*/

console.log("Exercise 2 and 3");

var messageStore = " Hello Eric, would you like to learn some Python today?";
console.log(messageStore);

// syntax: string.replace(regexp/substr, newSubStr/function[, flags]);
var re = /Eric/gi;

var upperCaseName = messageStore.replace(re, "ERIC");
console.log(`Upper Case : ${upperCaseName}`);

var lowerCaseName = messageStore.replace(re, "eric");
console.log(`Lower Case : ${lowerCaseName}`);

// function: capitalize first letter of all word of message

var messageStr2 = ("Hello Eric, would you like to learn some Python today?");

  function titleCase(str : string) {
    return str
      .toLowerCase()   // convert message into lower case
      .split(' ')       // split words and convert into array
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');  
  }

const titleCaseString2 = titleCase(messageStr2); // store str in variable
console.log(`Title Case : ${titleCaseString2}`); // print string 