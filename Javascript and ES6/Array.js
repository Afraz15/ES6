// ES6
// forEach()

const Todo = ['school', 'home', 'academy', 'home', 'sleep'] 
Todo.forEach( ( things, index ) => {
    // this forEach works like a loop in es6, things is self-made variable but index is a keyword
    console.log(`i have to go to ${things} and it's index is ${index}`)
} )


// Map()
// map will create a copy of the array so we can modify it

const list = Todo.map( ( items, index ) => {
    return `${index} = ${items}`
} )
console.log(list)


// Filter()
// this simply filer out the thing like if we want something

const filterlist = Todo.filter((item, index) => {
    return item === 'school'
})

const filterlist2 = Todo.filter((item, index) => {
    return item !== 'school'
})

console.log(filterlist)
console.log(filterlist2)