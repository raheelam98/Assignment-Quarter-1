
console.log("Exercise 4 and 5");

/*
4)Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”

5)Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/

var quotation = "The ultimate aim of the ego is not to see something, but to be something.";
var author = "Muhammad Iqbal said, "


//concat(): return concat string
//Syntax: string.concat(string2, string3[, ..., stringN]); 

var str1 = new String(author);
var str2 = new String(quotation);

// concat text
console.log(`${str1} " ${str2} "`);

var famous_person = new String(author);
var famous_quote = new String(quotation);

var message1 = famous_person.concat(famous_quote.toString());
console.log(message1);