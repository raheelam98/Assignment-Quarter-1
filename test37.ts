console.log("Exercise 37\n");

/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
with the default message, and a shirt of any size with a different message.
*/

function make_shirt2(
                    size2 : string  = "Large", 
                    message2 : string = "I Love TypeScript"): void {
                        console.log(`Size   : ${size2}\nMessage: ${message2}\n`);
}

//shirt is large by default with a message 
make_shirt2();

//shirt is medium by default with a message 
make_shirt2("Medium");

//shirt is large with a message
make_shirt2("Small", "TypeScript");





export{}