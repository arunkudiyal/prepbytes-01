// // Event Loops
// const fun1  = () => {
//     console.log('Execution started... - 1')             // op1
//     fun2()                                              // HOLD
//     console.log('Function 1 was executed - 1')
// } 

// const fun2  = () => {
//     console.log('Execution started... - 2')             // op2
//     fun3()                                              // HOLD
//     console.log('Function 2 was executed - 2')
// } 

// const fun3  = () => {
//     console.log('Execution started... - 3')             // op3
//     fun4()                                              // HOLD
//     console.log('Function 3 was executed - 3')
// } 

// const fun4  = () => {
//     console.log('Execution started... - 4')
//     fun5()
//     console.log('Function 4 was executed - 4')
// } 

// const fun5  = () => {
//     console.log('Execution started... - 5')
//     console.log('Function 5 was executed')
//     console.log('Exection finished')
// } 

// fun1()
// // Output -> 
// // 


// First Class Function
// any function which can be treated as a variable in the code, is a first class function


// Higher Order Functions -> Any function which takes an another function as an argument is called HOF.

// const calculater = (num1, num2, callback) => {
//     const result = callback(num1, num2)
//     console.log(result)
// }

// const myCallback = (a, b) => {
//     return a * b
// }

// calculater( 100, 3, myCallback )


// const createYourNameMessage = (name, messageFunction) => {
//     const myMessage = messageFunction()
//     console.log(`Hello ${name}, this is the message for you --> ${myMessage}`)
// }

// createYourNameMessage( 'Arun', () => {return 'You are a bad teacher!'} )


// const twoCallbackFunction = (cb1, cb2) => {
//     const resultOne = cb1()
//     const resultTwo = cb2()
//     console.log(`${resultOne} --> ${resultTwo}`)
// }

// twoCallbackFunction( () => {return 10}, () => { return 100 } )


// ECMAScript
// ES5 --> Contrsutor Function to create objects 
// ES6 --> Introduction to a new keyword called 'class'

// class -> data + function

// Constructor Function -> Build / Create Objects
function Student(name, age, standard, marks) {
    // create local variables inside the function -> this
    this.name = name
    this.age = age
    this.standard = standard
    this.marks = marks

    // Create functions inside the constructor functions
    this.getDetials = function() {
        return `The student with the name of ${this.name} studies in ${this.standard} and is ${this.age} years old.`
    }
}

// create objects from the function
const studentOne = new Student('Arun Kudiyal', 16, "9th Standard", [10, 15, 20, 23, 5])
console.log(studentOne)
console.log(studentOne.getDetials())

// Prototype


// ES6 -> Arrow Functions
// ES6 Classes