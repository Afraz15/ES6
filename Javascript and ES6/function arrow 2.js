// Old Java Script

function hello(){
    console.log('Hello friends')
}

var Good = function(){
    console.log('Have a good day')
}

hello()
Good()
// functions can be written in two ways


// ES6

const App = name => { // since there is single variable then it can be written like this and if there are more than one then it should be written in parenthesis
    console.log(`Your app ${name} didn't work`)
}   // same goes to these {}, if there is a single statement then brackets are not needed

App()
App('Google')
