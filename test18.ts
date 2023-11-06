console.log("Exercise 18");
/*
Seeing the World: Think of at least five places in the world you’d like to visit.
1• Store the locations in a array. Make sure the array is not in alphabetical order.
2• Print your array in its original order.
3• Print your array in alphabetical order without modifying the actual list.
4• Show that your array is still in its original order by printing it.
5• Print your array in reverse alphabetical order without changing the order of the original list.
6• Show that your array is still in its original order by printing it again.
7• Reverse the order of your list. Print the array to show that its order has changed.
8• Reverse the order of your list again. Print the list to show it’s back to its original order.
9• Sort your array so it’s stored in alphabetical order. 
Print the array to show that its order has been changed.
10• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed.
*/

//1• Store the locations in a array. Make sure the array is not in alphabetical order.
let locations : string[] = [ "Pakistan", "USA", "Spain" , "China", "Italy", "Germany"];

//2• Print your array in its original order
console.log("1. Original Order");
console.log(locations);

//3• Print array in alphabetical order without modifying the actual list.
console.log("\n 2. Alphabetical order of locations without modifying the actual list");
//console.log(locations.sort()); //modify original arrary
console.log([...locations].sort());

//4• Show that your array is still in its original order by printing it.

console.log("\n 3. Array is still in its original order");
console.log(locations);

//5• Print array in reverse alphabetical order without changing the order of the original list.
console.log("\n 4. Array in reverse alphabetical order without changing the order");
//console.log(locations.reverse()); //modify original arrary
//console.log([...locations].reverse());
console.log([...locations].sort().reverse());

//6• Show that your array is still in its original order by printing it again.
console.log("\n 5. Array is still in its original order");
console.log(locations);

//7• Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n 6. Reverse of original order");
//console.log([...locations].reverse());
locations.reverse();
console.log(locations);

//8• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("7. \n Reverse the order of your list again");
//console.log(locations.reverse());
locations.reverse();
console.log(locations);

//9• Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
console.log("\n 8. Sort array,  in alphabetical order.");
locations.sort();
console.log(locations);


//10• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
console.log("\n 9. Sort to change, stored in reverse alphabetical order.");
console.log(locations.sort().reverse());

//sorte array in  alphabetical order without modifying the actual list
//array.sort(); sort alphabetical (not number check)
//array.reverse(); // reverse the oder

export{}