console.log("Exercise 16");

/*
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the 
end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • 
Use append() to add one new guest to the end of your list. • 
Print a new set of invitation messages, one for each person in your list.
*/


let guestList = ["Sara", "Ali", "Mike"];

console.log(` ${guestList}, are coming for dinner`);


//three more guests to invite to dinner.

//unshift(): add element in the begining
let firstGuest = "Jamal";
guestList.unshift(firstGuest);  // add in the begining

//push(): add element at the end
let lastGuest = "Saba"
guestList.push(lastGuest);   // add at end

//splice() :  add and delete in middle
//arrayName.splice(addingIndexNumber, deletElementsCount, "addStringValue")

let middleGuest = "Asma";
let middleIndex = Math.floor((guestList.length)/2);
guestList.splice(middleIndex,0,middleGuest) // add in middle index 

//console.log(`Middle Index is ${middleIndex}`);
//console.log(guestList);

//Print a new set of invitation messages
for(let guest of guestList){
    console.log(`We found a bigger table ${guest}, you are invited to have dinner.` )
}