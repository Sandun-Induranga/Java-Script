console.log("Hello there I'm from the console")

/* Variables */
var x = 'Hello JS'; // Loosely typed - No type
typeof x;

/*
*
*   In Java
*   String s = ""; // Type is strong
*
*   In JS
*   var x = 10;
*   x = 'Ten';
*   x = true; // This is Dynamic Typing
*   Case Sensitive
*
* */

/* Troubles we have to face by creating variables
*
*   1
*   var myState = false;
*   var myState = true; // Legal ,Can duplicate
*
*   2
*   var myTp = 119
*   {
*       console.log(myTp) // Legal
*       var myAge = 100;
*   }
*   console.log(myAge); // This is also legal
*
*   console.log(newVar)  // No Error because the x defined bellow (Only with var keyword)
*   newVar = 10
*
*
*   // Hoisting - this is the special feature in var
*
*   console.log(x)
*   newVar = 10
*   console.log(x)  // No Error because the x defined bellow (Only with var keyword)
*
*
*
* ***************************************************** let ******************************************************
*
*   let myName = 'Dasun'
*   let myName = 'Nimal' // Error
*   console.log(myName)
*
*   {
*       let myAge = 10;
*   }
*
*   console.log(myAge) // Error  - Scope is considered
*
*   let also support for dynamic supporting
*
*   Not Supporting for Hoisting
*
* */
