// console.log(me)
// //console.log(job)
// console.log(year)

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;



// console.log(addDecl(2,3));
// //console.log(addExpression(3,3));
// console.log(addArrow);
// console.log(addArrow(4,4));

// function addDecl(a,b){
//     return a + b;
// }

// var addExpression = function(a,b){
//     return a + b;
// }

// var addArrow = (a,b) => a + b;

console.log(numProducts)
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All items deleted!!')
}

//due to hoisting, when we use var, numProducts is undefined when the if statement is executed below.

//The solution is to use const most of the time, and let, if you need to change the variable later.

//In order to make clean code, we should declare our variables at the top of each scope.

//Declare functions first, and use them after declaration.

var x = 1;
let y = 2;
const z = 3;

console.log(z === window.z);