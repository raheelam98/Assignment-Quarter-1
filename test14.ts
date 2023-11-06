console.log("Exercise 14");
/*
Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people 
 you’d like to invite to dinner. Then use your list to 
 print a message to each person, inviting them to dinner.
*/

console.log("for of loop")

let guestNames = ["Sara", "Ali", "Johan"];

for (let name1 of guestNames){
    console.log(` ${name1}, would you like to come for dinner`);
}

/*
Sara, would you like to come for dinner
 Ali, would you like to come for dinner
 Johan, would you like to come for dinner
*/

console.log("\nforEach loop")
let guestList = ["Bushra", "Asma", "Sadia"];

guestList.forEach((guestName) => {
    console.log(`${guestName}, are you comming for dinner`)
}    
)

/*
Bushra, are you comming for dinner
Asma, are you comming for dinner
Sadia, are you comming for dinner
*/

export{}






