// Old Java Script

var person = {
    name: 'Usama',
    Age: 19
}
// to call the self-made objects, we use:

var Name = [person.name, person.Age]    // it can simply be called like person.name but it will be quite a lot of work
console.log(('My name is ' + Name[0] ), ('and i am ' + Name[1]))


// ES6

// In ES6, it's quite fun

const man = {
    Name: 'Usman',
    age: 19
}

const {Name, age} = man // we just type in the name of the object

console.log(`Hello! My name is ${Name} and I'm ${age} years old......`)

