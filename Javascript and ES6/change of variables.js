// Old Java Script

var number = 20;
console.log(number);
// this is how we declare variable in java script but there are some drawbacks in it like:
number = 5
console.log(number)
// it can be modified

//___________________________________________________________________________________________

// ES6

// let and const are used to make variable

// to solve the problem of later modification in java script we use:
const hi = 345
console.log(hi)
// now if we try to change the value of hi it will give constant assignment error


// now suppose if we want to re-assign a value, for theat we use let

let hey = 2233
console.log(hey)
hey = 1122
console.log(hey)

// if you run this code then you can see two different values, the original and the re-assigned value
