'use strict';

//Global scope function.
function calcAge(birthYear){
    const age = 2047 - birthYear;
    
    const printAge = function printAge(){
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output);
    }
    printAge();
}

const firstName = 'Jonas';
calcAge(1991);

    //This JS engine is trying to find the age variable inside the function 'printAge'.
    //Since it cannot find it here (it cannot find it as we are not providing it as an argument to the function call to printAge(),
    // nor are we setting it up any parameter in the function definition), it goes to the parent scope, which is calcAge,
    //containing the birthYear parameter in it's function definitoin.

    //The same is true for the birthYear variable.

    //The parent scope is calcAge, where we have the age variable declared on line 5 and being assigned the value of the
    //birthYear parameter provided in the function call, as there is a birthYear parameter in the function definition.