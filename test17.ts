console.log("Exercise 17");
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive
 in time for the dinner, and you have space for only two guests.
1• Start with your program from Exercise 16. Add a new line that prints a message 
saying that you can invite only two people for dinner.

2• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting 
them know you’re sorry you can’t invite them to dinner.

3• Print a message to each of the two people still on your list, 
letting them know they’re still invited.

4• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.
*/

let guestList = ["Sara", "Ali", "Mike", "Jamal"];

//1 : print message , you can invite only two people for dinner
//for (let geuest of guestList){
    console.log(` Space is available for two people`);
//}

/* 2• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting 
them know you’re sorry you can’t invite them to dinner. */

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, we cant invite you for dinner.`);  
    }
    
//3• Print a message to each of the two people still on your list

for( let guest of guestList){
    console.log(`${guest}, you are still in the list`);
}
/* 4• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.
*/

//array.pop(): remove element from last
guestList.pop();
guestList.pop();

console.log(`No one is available, list is empty : ${guestList}`);

export{}
