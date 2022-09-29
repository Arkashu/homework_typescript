"use strict";
const obj1 = {
    name: 'John',
    surname: 'Smith'
};
obj1.name = 'Pete';
delete obj1.name;
const arr = [1, 2, 3, -1, -2, -3];
function isPositive(a) {
    return a.every(item => item > 0);
}

console.log(isPositive(arr))