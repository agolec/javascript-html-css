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
  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    //The below code in orderDelivery is useful for destructuring since we can perform destructuring syntax in the parameter list.
    orderDelivery: function({starterIndex,mainIndex,time,address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)

    }
};
//destructuring objects. We do not have to skip anything/order does not matter when performing this with objects.
const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories)               

//if we want variable names to be different from the property names, we can do that too:
const {name:restaurantName, openingHours: hours,categories: tags} = restaurant;
console.log(restaurantName,hours,tags);     //outputs the same thing as above, but lets us rename it. This is useful when we use 3rd party data (like an object we might get from an API call) because it might have a name we do not want.

//DEFAULT VALUES (objects)
// It can also be useful to use default values, in case we get nothing back (below):
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters); //outputs an empty array and then the starter menu array from the restaurant object. This is useful for when we don't have hardcoded data. Because the real world reads data in rather than hard coding them.

//mutating variables:
let a = 111;
let b = 999;
const obj = {a: 23,b:7, c: 14};
({a,b} = obj);
console.log(a,b)

//nested objects

//we have already declared openingHours on line 38.
//To destructure it further (to get open/close hours), use the below syntax:
const {fri:{open: o,close: c}} = openingHours;
console.log(o,c)

//Practical application. We will make another method (called orderDelivery) inside our restaurant object.
//Sometimes we will make a lot of parameters in an object. Rather than knowing what the order of every parameter is, we can pass in an object that gets destructured into all the parameters needed.

//Below, we will begin to use the orderDelivery function from the restaurant object, and pass in an object containing time, address, mainIndex, and StarterIndex.

restaurant.orderDelivery({
    time: '22:30',
    address: 'Costa de Sol, 21',
    mainIndex: 2,
    starterIndex: 2
})

// const [starter,main] = restaurant.order(2,0);
// console.log(`${starter}, ${main}`)      //returns 'Garlic Bread' and 'Pizza'.

// //Say we have a nested array. How will we handle this?

// //Nested destructuring:
// const nested = [2,4, [5,6]]; // [5,6] are an array inside an array.
// // const [i,,j] = nested;
// // console.log(`i: ${i}, j: ${j}`)

// /* if we want to destructure all the elements in this, we write the following instead*/
// const [i,,[j,k]] = nested;
// console.log(`i: ${i}, j: ${j} k:${k}`) 

// // We can also set default values when we are destructuring.
// //this happens when we don't know the length of the array we're destructuring.

// //default values
// const [p,q,r] = [8,9]
// console.log(p,q,r) //ouput: 8,9, undefined.

// const [s=1,t=2,u=3] = [10,11]; //giving default values into our destructured variables.
// console.log(s,t,u) // outputs 10, 11, 3