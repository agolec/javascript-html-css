'use strict';

console.log(this);

const calcAge = function (birthYear) {
    console.log(2038- birthYear);
    console.log(this);
};
calcAge(1993);