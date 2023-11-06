console.log("Exercise 13");

/*
Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/

let favoriteTransport : Array <[transport: string, brand: string]> = []

favoriteTransport.push(["Car","Tayota"]);
favoriteTransport.push(["Truck", "Honda"]);
favoriteTransport.push(["Rickshaw", "Toyota"])

console.log(favoriteTransport);

// print : [ [ 'Car', 'Tayota' ], [ 'Truck', 'Honda' ], [ 'Rickshaw', 'Toyota' ] ]

//print a series of statements about these items
//“I would like to own a Honda motorcycle.”

favoriteTransport.forEach( ([transport, brand]) =>
    {console.log(`I would like to own a ${brand} ${transport}` )}
)

/* print :
I would like to own a Tayota Car
I would like to own a Honda Truck
I would like to own a Toyota Rickshaw
*/

