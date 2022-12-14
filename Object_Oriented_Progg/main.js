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
// const str1 = new String('This is my string')
// console.log(str1)
// const newStr = str1.__proto__.toUpperCase() 
// console.log(newStr)

// ES6 -> Arrow Functions
// ES6 Classes
// class is a unit which is a basic combination of properties and methods

// PILLARS OF OOPS
// 1. Encapsulation --> A way of wrapping your properties & methods in a single unit called class
// 2. Absstraction --> Eg: Radio --> Hiding the implemetation details --> Getters and Setters
// 3. Polymorphirsm --> Poly (many); morph (forms); function --> existing in multiple form --> sample anme but diff functionalities
// 4. Inheritance --> Inherit properties & methods from a parent class to child class
// --> Types of Inheritance (Multiple Inheriyance)

// class Car {
//     // properties -> no let, no var, no const
//     // carName

//     // private properties
//     #name
//     #type
//     #model
//     // private String name <--> #name

//     // Constructor -> piece of code which helps you initialise the class properties 
//     constructor(name, type, model) {
//         // this.propertyName = parameter
//         this.#name = name,
//         this.#type = type,
//         this.#model = model
//     }

//     // Getter & Setters Methods
//     getCarName = () => {
//         return this.#name
//     }

//     getCarType = () => {
//         return this.#type
//     }

//     getCarModel = () => {
//         return this.#model
//     }

//     setCarName = (newName) => {
//         this.#name = newName
//     }

//     getCarDetials = () => {
//         return `This is ${this.#name} and the type is ${this.#type}`
//     }

// }

// // Object
// const myCar = new Car("i20 Sports", "Mini SUV", "Sportz Model")
// console.log(myCar)
// // console.log( myCar.#name )
// // myCar.#name = 'Changed Car Name'
// // console.log(myCar)

// console.log( myCar.getCarName() )
// console.log( myCar.getCarType() )
// console.log( myCar.getCarModel() )

// console.log(myCar.getCarDetials())

// myCar.setCarName('Thar')

// console.log(myCar.getCarDetials())

// EXAMPLE - 2

// Class -> Template to create real life entities (objects)

// import './script'
// import Demo from './script'

// class Animal {
//     // Properties
//     defaultProperty = 'This is a default Property'
//     #type
//     #name
//     #noOfLegs
//     #hasWings

//     // constructor() {}

//     constructor(type, name, noOfLegs, hasWings) {
//         this.#type = type
//         this.#name = name
//         this.#noOfLegs = noOfLegs
//         this.#hasWings = hasWings
//     }

//     // Methods --> If you want to create private methods, put # in front.
//     speak = () => {
//         return `${this.#name} is speaking...`
//     }

//     // YOU CAN ALSO DO THIS BUT YOU SHOULN'T
//     // anyHowImplementMethod = () => {
//     //     return this.#speak()
//     // }

//     eat = () => {
//         return `${this.#name} is eating...`
//     }
// }

// // Real-Life Entities (Objects)
// // const demo1 = new Demo(100, 200)
// // console.log(demo1)

// const lion = new Animal("Mammal", "Lion", 4, false)
// console.log( lion )
// console.log( lion.defaultProperty )

// // Access your methods
// // console.log( lion.anyHowImplementMethod() )
// lion.speak()
// console.log( lion.speak() )
// console.log( lion.speak('roar') )
// console.log( lion.eat() )


// INHERITANCE IN OOPs
// --> Way to inherit functionalities and properties from one class to another class

// class Person {
//     #sampleProp = 'This is a sample property'
//     constructor(name, age, gender) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }

//     getDetails = () => {
//         const myPerson = {
//             name: this.name,
//             age: this.age,
//             gender: this.gender
//         }

//         return myPerson
//     }
// }

// class Professor extends Person {
//     constructor(name, age, gender, subject, degree) {
//         super(name, age, gender)
//         this.subject = subject
//         this.degree = degree
//     }
// }

// class Student extends Person {
//     constructor(name, age, gender, collegeName, specialization) {
//         super(name, age, gender)
//         this.collegeName = collegeName
//         this.specialization = specialization
//     }
// }

// const newProfessor = new Professor("Mr. Griffins", 34, 'Male', 'Physics', 'P.hD.')
// console.log(newProfessor)
// console.log( newProfessor.getDetails() )


// const newStudent = new Student('Harry', 21, 'Male', 'IIT-B', 'CSE')
// console.log(newStudent)
// console.log(newStudent.getDetails())


// Multiple Inheritance
// --> One child class tries to inherit more than one parent class
// class Demo extends Demo1, Demo2

// Demo1 {
//     method --> fun()
// }

// Demo2 {
//     method --> fun()
// }

// obj = Demo1, Demo2
// obj.fun()