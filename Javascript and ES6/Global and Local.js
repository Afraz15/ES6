// Old Java Script

Good = ['hello', 'world', 'of', 'information', 'and', 'technology']

for(var i = 0;i < Good.length; i++ ){
    console.log('value of i is ' + i)
}
console.log(i) 
// value is 6 because it was incremented but the real problem is that it was used like a global variable 

// ES6

good = ['h', 'e', 'l', 'l', 'o']

for(let I = 0; I < good.length; I++){
    console.log('value of I is ' + I)
}
// we used let in for loop because value is to be changed
// if we try to use I outside of loop then it will give error and this is called "block scoping"

