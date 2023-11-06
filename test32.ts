console.log("Exercise 32\n");

/*
Checking Usernames: Do the following to create a program that simulates how websites
 ensure that everyone has a unique username.
1• Make a list of five or more usernames called current_users.
2• Make another list of five usernames called new_users. Make sure one or two of the
 new usernames are also in the current_users list.
3• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username. 
 If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
should not be accepted.
*/

   //1• list of usernames called current_users.
   const current_users1: string[] = ["Sadia", "Akram", "Jamal", "Bushra", "Shehzad"];

   //2• list of five usernames called new_users. Make sure one or two of the
   //new usernames are also in the current_users list.
   const new_users1: string[] = ["Sadia", "Bushra", "Shayan", "Saigal", "Okash" ];

   function checkUserName ( current_users1 : string[], new_users1: string[] ){

      // Array of current users in lower case
      const lowerCaseCurrentUsers = current_users1.map( user1 => user1.toLowerCase());

      for (const newUser of new_users1){
         // Array of new users in lower case
         const lowerCasedNewUser = newUser.toLowerCase();

            if (lowerCaseCurrentUsers.includes(lowerCasedNewUser)){
               console.log(` User Name '${newUser}' is already taken
               Please Enter a new username.\n`); 
            } else {
               console.log(` User Name " ${newUser} is available.`);
            }
      }

   }
   checkUserName(current_users1, new_users1);


   export{}
   //array.map(callback[, thisObject])
   //const lowercaseArray1 = originalArray1.map(item => item.toLowerCase());
   // Returns: created array (an array that contains the results)