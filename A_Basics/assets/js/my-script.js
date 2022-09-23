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
*
*   There are three ways to create variables
*
*   1. var
*   2. let
*   3. const
*
*
*   Case Sensitive
*   The first letter should be a-z, A-Z, $ or _
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
*
*
* ***************************************************** const ******************************************************
*
*   const name = 'Dasun'
*   name = 'Nimal' // Error - can't change a value of a variable, if use const
*
*
* **************************************************  Data Types in JS  ********************************************
*
*  *********** Primitive Data Types **************
*
*       String
*       Number
*       Boolean
*       Undefined
*       BigInt (Newly Introduced)
*
*           --- String ---
*               var name = "Hello";
*               var address = 'Sri Lanka'; // Can use single quot or double
*
*               - String Related Methods -
*                   length
*                   toUpperCase
*                   toLowerCase
*                   trimLeft  - remove white spaces in left
*                   trimRight
*                   trim
*                   split - return an array with by separating the value that pass as the parameter
*                   charAt
*                   charCodeAt - Ascii code
*                   indexOf
*                   substring
*                   substr
*
*
*
*           --- Number ---
*               decimal
*               binary
*               octal
*               hexadecimal
*               floating point
*
*               var number = 10;
*               var number = ob1010;
*               var number = O12;
*               var number = 0xA;
*               var number = 10.5;
*
*               These numbers referred by number type
*
*
*
*           --- BigInt ---
*
*               If we use a number greater than 9007199254740991, it's better if use BigInt Type;
*
*               let bigInt = 9007199254740995n; // should add 'n' after the number
*
*
*
*           --- Boolean ---
*
*               var bool = true;
*               var bool = false;
*
*
*
*           --- Undefined ---
*
*               When there is no value for a variable, It is automatically refer the type of undefined.
*
*               var noValue;
*
*
*  *********** Structural Types ************
*
*       Object
*       Function
*
*  *********** Structural Root Primitives ***********
*
*       Null
*
*       var x = null; // initialized, but no values (Use to initialize an variable with no value)
*       Null is an object
*
*
*
*
*
*
* **************************** How to create a named value container(Object) in JS *******************************
*
*       --- Literal Base Object (ROW Version of creating an Object) ---
*
*           var customer={
*               id: "C001",
*               name: "Dasun",
*               address: "Galle",
*               salary: 10000
*           }
*
*               - How to access values in an object -
*                   1. Dot notation
*                       customer.id
*
*                   2. Bracket notation
*                       customer['name']
*
*
*  */
