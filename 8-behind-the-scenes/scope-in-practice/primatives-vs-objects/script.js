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

