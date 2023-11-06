console.log("Exercise 31\n ");

/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
1• If the list is empty, print the message We need to find some users!
2• Remove all of the usernames from your array, and make sure the correct message 
is printed.
*/

//list of users is not empty 
let userNames: string[] = ["Sadia", "Akram", "admin", "Bushra", "Suba"];

function greetingUsers ( usernames1 : string[]){
    if ( usernames1.length === 0){
        console.log('We need to find some users!\n');
        return;
    }

    for( let username2 of usernames1){
        if ( username2.toLowerCase() === 'admin'){
            console.log(`Hello admin, would you like to see a status report?`)
        } else {
             console.log(`Hello ${username2}, thank you for logging in again.`)
        }
    }  
}

console.log(` For non empty list\n`);
greetingUsers(userNames);

//1• If the list is empty, print the message We need to find some users!
userNames = [];

console.log(`\nlist is empty \n`);
greetingUsers(userNames);


export{}