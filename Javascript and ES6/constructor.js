// Old Java Script

// Constructor is like a blue print and not a function or anything

function Person( name, age, height ) {      // constructors first letter is always upper
    this.name = name        // right now, this should be equal to Person but since it is a constructor it doesnot have any value
    this.age = age
    this.height = height    // we are assigning values that the value in person.height is equal to value of height 
}

Person.prototype.hi = function(name){       // it seems like prototype is used to create fuctions related to that object
    console.log('My name is ' + this.name)
}

var Hassan = new Person('Hassan', '45', 6)

function dev( name, age, height, like, job ){
    Person.call(this,name,age,height)   // this is how we link another list inside of a list
    this.like = like
    this.job = job
}

dev.prototype = Object.create(Person.prototype)

var daniel = new dev('daniel', 19, 6, 'husky', 'SE')
console.log(daniel)
daniel.hi()

// SO the statements inside of the function is called properties
// And the function which is made linked with person is called function of the object
// When we call Person in dev function it will only call it's properties and not it's functions


// ES6

class Shoppinglist{
    constructor( name, nr ){
        this.name = name
        this.nr = nr
    }   
    List(){
        console.log(this.name)
    }
}

const newList = new Shoppinglist(['Milk', 'Chocolate', 'ChocolateMilk'], 3)
console.log(newList)
newList.List()

// suppose we want to call the properties of the above function like old javascript's call property

class Item extends Shoppinglist {                  // now to call the function and use it here, we use extends and super
    constructor(name, nr, cost){                   // call the properties
        super(name, nr)                                                  // now to use the properties
        this.cost = cost
    }
}

const items = new Item(['Milk', 'Chocolate'], 3, 20)
console.log(items)
