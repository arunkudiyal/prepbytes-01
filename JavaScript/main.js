// JAVACRIPT
// 1. JS is an intepreted lang -> executes line-by-line
// 2. JS is helpful for making dynamic (on run-time) Front_End Applications using DOM & AJAX
// 3. JS is a programming language (it will make decision for you), Its a complete OOPs

// 1. How to print values in JS
// console.log('Hello...')
// console.warn('This is a warning..')
// console.error('This is a warning..')

// Data-Types, Variables and Constants
// Data Types -> Nothing but different type of data that JS understand
// 1. Primitive Data Types (PDTs)
// i. number
// variable1 = 1000
// console.log(variable1 + 10)

// Add two numbers
// num1 = 100
// num2 = 3
// sum = num1 + num2
// console.log(sum)

// // ii. string
// string1 = 'String - One'
// string2 = 'String - Two'
// string3 = 'String - Three'
// console.log(string1, string2, string3)

// // iii. boolean
// console.log(true)
// console.log(false)

// // iv. null
// let myVarible = 'This is a String'
// console.log(myVarible)
// myVarible = 100
// console.log(myVarible)

// console.log(myVarible)

// // v. undefined
// console.log(myVaribale2)

// vi. Symbol


// OPERATORS -> what operation do you wnat to perform on the data
// 1. Arithmetic Operations
// variable1 = 100
// variable2 = 2

// sum = variable1 + variable2
// diff = variable1 - variable2
// product = variable1 * variable2
// // Ans is the quotient
// division = variable1 / variable2

// console.log(sum)
// console.log(diff)
// console.log(product)
// console.log(division)

// // Modulous -> Ans is the remainder
// mod = variable1 % variable2
// console.log(mod)

// Comparitive Operators

// CHECK THE DATA TYPE OF A VARIABLE - typeof
// console.log(typeof(value1))
// console.log(typeof("Hello"))
// console.log(typeof(true))

// INTERNAL_TYPECASTING
// value1 = 1
// value2 = true

// console.log(value1 - value2)
// console.log( value1 > value2 )
// console.log( value1 < value2 )
// console.log( value1 >= value2 )
// console.log( value1 <= value2 )

// console.log(value1 == value2)   // This checks only the value of the 2 variable
// console.log(value1 === value2)  // This checks not the value BUT ALSO the type

// 2. Non-Primitive Data Types (Non-PDTs)

// Conditional Statements -> if, else if, and else
// Q -> you are given with 2 numbers, add them and print them
// num1 = 100
// num2 = 150
// console.log(num1 + num2)
// if( typeof(num1) === 'number' ) {
//     console.log(num1, " is a number")
//     if( typeof(num2) === 'number' ) {
//         console.log(num2, " is a number")
//         console.log(num1 + num2)
//     }
// }

// Logical Gates
// AND ->
// a    b       o/p
// 0    0       0
// 0    1       0
// 1    0       0
// 1    1       1

// XOR ->
// a    b       o/p
// 0    0       0
// 0    1       1
// 1    0       1
// 1    1       0

// OR ->
// a    b       o/p
// 0    0       0
// 0    1       1
// 1    0       1
// 1    1       1

// NOT ->
// a       o/p
// 0       1
// 1       0

// Q -> You are given with two +ve values, add them and print the sqaure , if either of the one is negative, print the cube of the differnce and if both values are -ve print to give correct input
var1 = 5
var2 = 2

// Global Declaration
// var sum = 0

// if(var1 > 0 && var2 > 0) {
//     var sum = 0
//     sum = var1 + var2
//     console.log(sum * sum)
// } else if(var1 < 0 ^ var2 < 0) {
//     let diff
//     diff = var1 - var2
//     console.log(diff * diff * diff);
// } else {
//     console.warn('Enter correct inputs')
// }

// console.log('Sum is - ', sum)
// console.log('Diffrence is - ', diff)


// ES6 Scopes -> var -> public, let -> private and const -> private

// var -> a public identifier, accessed inside or outside the block
// let -> a private identifier, accessed inside the block
// const -> a private identifier, accessed inside the block BUT it cannot be declared and not initialised ALSO const variable cannot be changed.

// DONOT DO THIS -> const pi
// const pi = 3.14
// // DONOT DO THIS -> pi = 2.34

// // Terniary Operators (? & :) -> if & else
// // condition ? True : False
// const someValue = -10
// someValue >= 0 ? console.log('POSITOVE') : console.log('NEGATIVE')

// INC / DEC OPERATORS

// let num = 10
// console.log(num + 1)
// postfix expression
// console.log(num++)
// console.log(num)
// // prefix expression
// console.log(++num)

// num += value | num = num + value
// num -= value | num = num - value
// num *= value | num = num * value
// num /= value | num = num / value
// num %= value | num = num % value
// console.log(num %= 2)