// // Event Loops
// const fun1  = () => {
//     console.log('Execution started... - 1')              // op1
//     fun2()                                               // HOLD | FINISHED
//     console.log('Function 1 was executed - 1')           // op11
// } 

// const fun2  = () => {
//     console.log('Execution started... - 2')              // op2
//     fun3()                                               // HOLD | FINISHED
//     console.log('Function 2 was executed - 2')           // op10
// } 

// const fun3  = () => {
//     console.log('Execution started... - 3')              // op3
//     fun4()                                               // HOLD | FINISHED
//     console.log('Function 3 was executed - 3')           // op9
// } 

// const fun4  = () => {
//     console.log('Execution started... - 4')              // op4
//     fun5()                                               // HOLD | FINISHED
//     console.log('Function 4 was executed - 4')           // op8
// } 

// const fun5  = () => {
//     console.log('Execution started... - 5')              // op5
//     console.log('Function 5 was executed')               // op6
//     console.log('Exection finished')                     // op7
// } 

// STACK MEMEORY -> LIFO (Last In, First Out)
// QUEUE MEMORY -> FIFI (First In, First Out) 

// fun1()
// // Output -> 
// // 


// First Class Function
// any function which can be treated as a variable in the code, is a first class function
// Eg -> ES6 Arroe Functions
// fun() --> const fun = () => {}

// Higher Order Functions -> Any function which takes an another function as an argument is called HOF.
// Eg. --> Higehr Order Array Methods --> map, forEach, filter, reduce etc.

// const calculater = (num1, num2, callback) => {
//     const result = callback(num1, num2)
//     console.log(result)
// }

// const myCallback = (a, b) => {
//     return a * b
// }

// calculater( 100, 3, myCallback )
// calculator( 100, 3, () => return a / b )


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

// function add(a, b) {
//     return a + b
// }

// console.log( add(10, 20) )

// Constructor Function -> Build / Create Objects
// function Student(name, age, standard, marks) {
//     // properties of a constructor function -> this keyword
//     // create local variables inside the function -> this
//     // Syntax --> this.propertyName = parameter

//     this.name = name
//     this.age = age
//     this.standard = standard
//     this.marks = marks

//     // Create functions inside the constructor functions
//     // Methods
//     this.getDetials = function() {
//         return `The student with the name of ${this.name} studies in ${this.standard} and is ${this.age} years old.`
//     }
// }

// // create objects from the function
// // SYNTAX --> const objectName = new ConstrutorFunction(arguemnts...)
// const studentOne = new Student('Arun Kudiyal', 16, "9th Standard", [10, 15, 20, 23, 5])
// console.log(studentOne)
// console.log(studentOne.name)
// console.log(studentOne.age)
// console.log(studentOne.standard)
// console.log(studentOne.marks)
// console.log(studentOne.getDetials())

// Prototype -> Any object in JS has a private property called prototype -> All the methods / functions defined in the class(ES6) / constructor function (ES5)
const str1 = new String('This is my string')
console.log(str1)
const newStr = str1.__proto__.toUpperCase() 
console.log(newStr)

// ES6 -> Arrow Functions
// ES6 Classes