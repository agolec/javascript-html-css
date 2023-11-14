'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [starter,main] = restaurant.order(2,0);
console.log(`${starter}, ${main}`)      //returns 'Garlic Bread' and 'Pizza'.

//Say we have a nested array. How will we handle this?

//Nested destructuring:
const nested = [2,4, [5,6]]; // [5,6] are an array inside an array.
// const [i,,j] = nested;
// console.log(`i: ${i}, j: ${j}`)

/* if we want to destructure all the elements in this, we write the following instead*/
const [i,,[j,k]] = nested;
console.log(`i: ${i}, j: ${j} k:${k}`) 

// We can also set default values when we are destructuring.
//this happens when we don't know the length of the array we're destructuring.

//default values
const [p,q,r] = [8,9]
console.log(p,q,r) //ouput: 8,9, undefined.

const [s=1,t=2,u=3] = [10,11]; //giving default values into our destructured variables.
console.log(s,t,u) // outputs 10, 11, 3