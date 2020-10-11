// Old Java Script

var user = {
    name: 'Afraz',
    Age: 19,
    Label: function(){
        console.log(('My name is ' + this.name),(' and i am in my ' + this.Age ))  
        // so basically, this.Age means object.Age which is object: user 
        var that = this // this declaration means that we are saying that user = this = that
        // if we don't do this that this will means label because this function is inside of label
        var Another = function(){
            console.log('Hello! ' + that.name + that.Age)
        }
        Another()
    }
}

user.Label()


// ES6

const user = {
    type: 'cars',
    year: 2018,
    func: function(){
        console.log(`i like ${this.type} and the year is ${this.year}`)
        others = () => {        // using arrows indicates that the value of this is user and not func
            console.log(`the values of ${this.type} and ${this.year} are working just fine`)
        }
        others()
    }
}
user.func()





