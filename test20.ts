console.log("Exercise 20");

/*
Think of something you could store in a array. For example, you could make a 
list of mountains, rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.
*/

let mountainList : string[] = [ "K2", "Nanga Parbat", "Gasherber 1" , "Brad Peak"];

console.log("Mountains in Pakistan");

//creates a list containing these items
for(let mountain of mountainList){
    console.log(mountain);
}
