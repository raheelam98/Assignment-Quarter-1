console.log("Exercise 22");

/*
Intentional Error: If you haven’t received an array index error in one of 
your programs yet, try to make one happen. Change an index in one of 
your programs to produce an index error. 
 Make sure you correct the error before closing the program.
*/

//Create function 
function carDetails ( name1: string, brand: string, model: number){
    return {
        name1,
        brand,
        model,
    }
}

//create array to insert data
const cars = [
    carDetails("Yaris", "Toyota", 2022),
    carDetails("Camry", "Toyota", 1999 ),
    carDetails("Corolla", "Toyota",  2015),
    carDetails("Civic", "Honda", 1998),
    carDetails("Forte", "Kia", 1997),
    carDetails("Picanto", "Kia", 2023)
]

//received an array index error
const invalidCarIndex = 15;
console.log(`Car at index ${invalidCarIndex}, is invalid`);

//correct the error before closing the program
// actual number of cars
const totalCars = cars.length;
console.log(`Actual Numbers of Cars : ${totalCars}`);

//Display cars with detail
cars.forEach( (carDisplay) => {
    console.log(`
        Name : ${carDisplay.name1},
        Brand : ${carDisplay.brand},
        Model : ${carDisplay.model}
    `)
}
)
export{}


/*
//create object in 
let car1 = {
    brand : "Toyato",
    name1 : "Yaris",
    color : "Blue",
    model : 2022
}
*/