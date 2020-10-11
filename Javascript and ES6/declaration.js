// Old Java Script

function Multiply( a, b){   // if we don't assign a default value then it will cause an error
    var h = a || 0          // this means that if a has value than it will be equal to h else 0
    var j = b || 0          // same as the above one
    console.log( h * j)
}

Multiply()


// ES6

const Add = ( x = 0 , y = 0) => {   // instead of assigning them in two more line like old js we can do it here
    console.log( x + y)
}

Add()
