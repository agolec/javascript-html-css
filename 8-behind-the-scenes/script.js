'use strict';

//Global scope function.
function calcAge(birthYear){
    const age = 2007 - birthYear;
    
    const printAge = function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
    }
    printAge();
}

const firstName = 'Dwight D. Shultz';
calcAge(1947);

    //This JS engine is trying to find the age variable inside the function 'printAge'.
    //Since it cannot find it here (it cannot find it as we are not providing it as an argument to the function call to printAge(),
    // nor are we setting it up any parameter in the function definition), it goes to the parent scope, which is calcAge,
    //containing the birthYear parameter in it's function definitoin.

    //The same is true for the birthYear variable.

    //The parent scope is calcAge, where we have the age variable declared on line 5 and being assigned the value of the
    //birthYear parameter provided in the function call, as there is a birthYear parameter in the function definition.

    //The variable firstName on line 14 is within the global scope level of our program, as it is outside all functions.
    //printAge() is still able to perform a lookup through from printAge, up to calcAge, and then up into the global scope.

    //this search for the variable names, (a variable's scope) can only go down the call stack?
    //          Ex: if we tried to console.log the age variable on the global scope level, 
    //          it would not work, as we are defining age as a function inside of calcAge. 
    //          The calcAge function has access to it, and printAge() has access to it, by being inside 
    //          (inner scope/child scope) of calcAge, but nothing outside of calcAge has access to it.

    //          Scoping only works one way. Variables and functions of the outer scope can be called by
    //          variables and functions of the inner scope, but the variables and functions of the outer 
    //          scope cannot call variables and functions of the inner scopes.