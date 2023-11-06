console.log("Exercise 33\n");

/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
1• Store the numbers 1 through 9 in a array.
2• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

//ordinals are written using numerals as prefixes and adjectives as suffixes.
//Ordinal numbers: 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th

//1• Store the numbers 1 through 9 in a array.
const numbers : number[] = [1,2,3,4,5,6,7,8,9]

//2• Loop through the array.

for ( let num1 of numbers){
    let ordinal1 : string;
    if ( num1 === 1){
        ordinal1 = "st";
    }
    else if ( num1 === 2 ){
        ordinal1 = "nd";
    } 
    else if ( num1 === 3){
        ordinal1 = "rd";
    }
    else {
        ordinal1 = "th";
    }  
    //print the proper ordinal ending for each number
    console.log(` Orinal Number : ${num1}${ordinal1}`);
}
