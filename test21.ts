console.log("Exercise 21");

/*  
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

//create Object

const teacher = {
    name1 : "Ali", 
    age : 30,
    teaching : true,
    degrees : ["Bsc", "MSc", "MPhil"],  
    //greet : function(){
  //      console.log("hello");
   // },
}

//console.log(teacher); 
//console.log(teacher.name1);
//teacher.greet();

//create array (to insert data)
let teachers : Array<typeof teacher> = [];

//push data  :  array.push()

teachers.push({     // insert data direct in arry by use push()
    name1 : "Sadia", 
    age : 40,
    teaching : true,
    degrees : ["Bsc", "MCS"], 
}
)

//push data  :  array.push()
teachers.push(teacher); 
teachers.push({
    name1 : "Saba", 
    age : 35,
    teaching : true,
    degrees : ["Bsc", "MSc", "MPhil"], 
}
)

// adding data
let teacher2 = {
    name1 : "Mike", 
    age : 22,
    teaching : false,
    degrees : ["Bsc", "ACC", "BA"], 
}
teachers.push(teacher2);

//console.log(teachers);

//create function to call data

function teachersData(teachers : Array<typeof teacher>){
    for ( let i of teachers){
        console.log(` 
        Teacher Name : ${i.name1},
        age : ${i.age},
        working : ${i.teaching},
        degrees : ${i.degrees}
        `)
    }
}

teachersData(teachers);


