console.log("Exercise 15");

/*
Changing Guest List: You just heard that one of your 
guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of 
your program stating the name of the guest who can’t make it.
*/

//Exercise 14

let guestList = ["Sara", "Ali", "Johan"];

console.log(` ${guestList}, are coming for dinner`);

//one of your guests can’t make the dinner
let dropGusest = guestList.pop();
console.log(`But ${dropGusest} can’t make the dinner `);

//message : You’ll have to think of someone else to invite
console.log(`${dropGusest}, Do you think of someone else to invite `);

console.log(`Remaning guests are ${guestList}`);

//New Guest is invited
let addNewGuest = guestList.push("Mike");
console.log("New Guest List ")
console.log(guestList);

// Print a second set of invitation messages, 
//one for each person who is still in your list.
guestList.forEach((guest: string) => {
    console.log(`${guest}, having dinner with us`)
}
)



export{guestList}