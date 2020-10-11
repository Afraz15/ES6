// Old Java Script

function goody(Company, Model){
    return{
        Name: Company, // it can be assigned like Company: Company
        ID: Model
    }
}
var Car = goody("Chevrolet", "Camaro")
console.log(Car)

// ES6

function Goody(Company, Model){
    return{
        Company,
        Model
    }
}

const car = Goody('Chevrolet', 'Camaro')
console.log(car)

// in ES6, we don't have to re-assign the values or whatever you wanna say



