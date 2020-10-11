                                    // PROMISE AND CALL BACK

// Old Java Script

function getData(data, callback){
    setTimeout(() => {
        console.log('reading data')
        callback({data: data})
    }, 2000)
}

getData(5 , function(data){
    console.log(data)
})   
// in this, we are calling the function and data is the data and callback is executed when the settimeout is done
//this is an async operation which means that it will 


// ES6

// we use promise in ES6 which means an operation which will be executed in the future

const promise = new Promise((resolve, reject) => {
    // here is async operation
    setTimeout(() => {
        resolve({name: 'Afraz', Pass:'1122'})
        reject(new Error('Error Detected'))
    }, 2000)
})

// to access that settimeout data we use:

promise.then(data => {  // data is a variable
    console.log(data)
})
.catch(err => console.log(err)) // err is a variable
// this is used to catch the errors, it's very useful in databases
// it appears when it there is no data in resolve/line#26