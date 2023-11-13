'use strict';

//primatives are strings, booleans, numbers, etc.

//Objects are user defined data structures that are far more complex, and built up 
//of primatives and other objects.

const me = {
    name: 'Jay',
    age: 33
}

const nick = me;
nick.name = 'Nick';
nick.age = 29;

console.log('me: ' + me);
console.log('nick: ' + nick);

/*
As I already know, we've performed a shallow copy of the me object on to the nick object, so they both point to the same memory address.

Because of this, when I say nick.age on line 15, we're changing the age of the object at the memory address shared by 'me' and 'nick'.
*/

// How we should handle this

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'

console.log('Before marriage', jessica);        //outputs Davis since it is referring to the same object reference/memory address as marriedJessica.
console.log('After marriage', marriedJessica);  //outputs Davis

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['alice','bob','cindy'],
};

// In order to get around this, we'd do the following, which merges two objects and returns a new one.
const jessicaCopy = Object.assign({}, jessica2);

//the Object class has the method assign, which will take an input object and return a new memory address for a copy of that object, into whatever variable you set up.

console.log('before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//this only works on the first level inside the object. If we have objects INSIDE the object we are copying, the lower levels will not copy. 
//In this below example, we take jessicaCopy and try to push more family members onto the family array from jessica2.

jessicaCopy.family.push('mary')

jessicaCopy.family.push('john')

console.log('Before marriage', jessica2)

console.log('Before marriage', jessicaCopy)

/* 
    both objects, jessica2 and jessicaCopy end up containing the same family array, which returns us to the original problem we had before.

    We would need to make a deep copy using a library like Lo-Dash.
]
*/

