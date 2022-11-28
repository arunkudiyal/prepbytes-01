// JAVACRIPT


// ANYTHING & EVERYTHING IN JAVASCRIPT ARE OBJECT


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
// var1 = 5
// var2 = 2

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
// console.log(num++) | console.log(num) + num = num+1
// 
// console.log(num)
// // prefix expression
// console.log(++num) | num += 1 + console.log(num)

// num += value | num = num + value
// num -= value | num = num - value
// num *= value | num = num * value
// num /= value | num = num / value
// num %= value | num = num % value
// console.log(num %= 2)

// Q -> Voting Sytem
// gender = 'M'/'F'
// age = 1-100
// gender = M, age >= 21, he can vote
// gender = F, age >= 18, you can vote

// gender = 'F'
// age = 17
// if(gender === 'M') {
//     if(age >= 21) {
//         console.log('You can vote')
//     } else {
//         console.log('You cannot vote')
//     }
// } else {
//     if(gender === 'F') {
//         if(age >= 18) {
//             console.log('She can vote')
//         } else {
//             console.log('She cannot vote')
//         }
//     }
// }

// gender = 'M'
// age = 18
// if(gender == 'M' && age >= 21) {
//     console.log('You can Vote')
// } else if(gender == 'F' && age >= 18) {
//     console.log('You can vote')
// } else {
//     console.log('You cannot vote')
// }

// gender = 'M'
// age = 21
// const myVarible = true
// if((gender == 'M' && age >= 21) || (gender == 'F' && age >= 18)) {
//     let variableOne = "Arun"
//     console.log('You can Vote')
// } else {
//     console.log('You cannot vote')
// }

// myVarible = false
// console.log(variableOne)

//             "01234567891011"
// let myString = "Arun Kudiyal"
// It will create an object of the certian type
// console.log(typeof(myNumber))
// JAVA - int myNumber = 100

// Methods / Function to update / manipulate data / Operation
// console.log( myString.toUpperCase() )
// console.log( myString.toLowerCase() )
// console.log( myString.charAt(6) )


// NON-PRIMATIVE DATA TYPES -

// 1. Array - [  ] -> A variable which contains multiple different variable inside it | Array always start from index 0
// const myVar = 100

// const fruits = [ "Apple", "Banana", "Orange", "Pears", "Watermelon" ]
// console.log(fruits)

// // console.log( Array.isArray(myVar) )
// // How to access the values -> using index value -> arrName[indexNo]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])

// const myArray = [100, "Arun Kudiyal", true, null, undefined]
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])

// myArray[6] = "New Value"
// console.log(myArray)
//              [ [00, 01, 02], [10, 11, 12], [20, 21, 22] ]
// const myArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// console.log(myArray)
// LENGTH
// console.log(myArray.length)
// Access 5
// console.log(myArray[2][2])


// 2. Object - {  } -> A variable which contains multiple differnt data types but in the form of key: value pair
// const obj = { key1: val1, key2: val2 }
// const user = {
//     name: 'User One',
//     age: 23,
//     isVerified: true,
//     hobbies: ["Play Cless", "Singing", "Reading Novels"],
//     address: {
//         street: 'Street 1',
//         city: 'Chandigarh',
//         state: 'Chandigarh',
//         country: 'India'
//     }
// }

// console.log(user)

// Access the object keys - (.)
// console.log('The name of the user is ', user.name)
// console.log(user.isVerified)
// console.log(user.age)
// ` ${ anyVariable } `
// console.log(`One of the hobbies of the user is ${user.hobbies[0]}`)
// console.log(`Complete address the user is Street - ${user.address.street}, City - ${user.address.city}, State - ${user.address.state}, Country - ${user.address.country}`)

// console.log(user.address)


// 3. Array of Objects - [ {}, {}, {}, {}, ... ]
// const users = [
//     {
//         name: 'User One',
//         age: 20,
//         isVerified: true,
//         hobbies: ["Studying", "Sleeping", "Eating"],
//         address: {
//             street: 'Street 1',
//             city: 'Dehradun',
//             state: 'Uttarakhand',
//             country: 'India'
//         }
//     },
//     {
//         name: 'User Two',
//         age: 27,
//         isVerified: true,
//         hobbies: ["Coding", "Irritate", "Play Soccer"],
//         address: {
//             street: 'Street 1',
//             city: 'Chandigarh',
//             state: 'Chandigarh',
//             country: 'India'
//         }
//     },
//     {
//         name: 'User Three',
//         age: 33,
//         isVerified: true,
//         hobbies: ["Play Cless", "Singing", "Reading Novels"],
//         address: {
//             street: 'Street 1',
//             city: 'Chandigarh',
//             state: 'Chandigarh',
//             country: 'India'
//         }
//     }
// ]

// console.log(`The hobby of the user ${users[2].name} is - ${users[2].hobbies[1]}`)

// Access the data from AOO -
// console.log(`The city of ${users[0].name} is ${users[0].address.city}`)
// console.log(`The hobbies of ${users[1].name} is ${users[1].hobbies[0]}, ${users[1].hobbies[1]} and ${users[1].hobbies[2]}`)


// Q -> 
// REFERNCE VARIBALE
// arr1 = memory location
// arr1 = #0abcef
// const arr1 = [10, 20, 30, 40, 50]

// // arr2 = #0abcef
// const arr2 = arr1

// arr2[5] = 1000

// console.log(arr1)
// console.log(arr2)

// const myObj1 = {
//     name: 'Arun',
//     email: 'abc@xyz.com'
// }

// const myObj2 = myObj1
// console.log(myObj1)
// console.log(myObj2)

// myObj1.number = 1234567890

// console.log(myObj1)
// console.log(myObj2)


// arr1 = [10, 20, 30, 40, 50]
// // Operator -> Spread Operator
// // arr2 = ...arr1 -> Copy the values from arr1 to arr2
// // arr2 = [ ] // Creating a physical array called arr2
// arr2 = [ ...arr1 ]

// arr2[5] = 100

// console.log(arr1);
// console.log(arr2);

// const obj1 = {
//     name: 'Arun',
//     age: 25
// }

// obj2 = { ...obj1 }

// obj2.email = "abc@xyz.com"

// console.log(obj1)
// console.log(obj2)


// 4. JSON

// LOOPS :- If you are doing any repitive operations, you can use loops instead
// 1. for -> for(;;)
// for(;;) {
//     // Statement
// }

// for(initialValue; condition; increment/decrement) {
//     // Statement
// }

// const ages = [100, 20, 25, 60, 12]
// console.log(ages)

// // index - 0 to (n-1) -> 0 to 4
// // for(let variable=0; variable < ages.length; variable+=1) {
// //     console.log(ages[variable])
// // }

// for(let variable=ages.length-1; variable >= 0; variable-=1) {
//     console.log(ages[variable])
// }

// number = 3
// for(let num=number; num <= number*10; num+=number) {
//     console.log(`${number} x ${num/number} = ${num}`)
// }

// number = 6
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// number = 5
// *
// * *
// * * *
// * * * *
// * * * * *

// number = 4
// *
// * *
// * * *
// * * * *

// 2. while -> where your start and end is unknown
// Q -> Print the values of the array until zero appears
// arr1 = [0, 10, 23, -45, 32, 19, 20, 46]
// let variable = 0
// while(arr1[variable] != 0) {
//     console.log(arr1[variable])
//     variable += 1
// }

// 3. do-while -> EXIT CONTROLLED LOOP
// arr1 = [10, 23, 0, -45, 32, 19, 20, 46]
// let variable = 0
// do {
//     console.log(arr1[variable])
//     variable += 1
// } while(arr1[variable] != 0)

// ARRAY IN-BUILT METHODS
// const arr = [10, 20, 30, 40, 50]
// const arr2 = [100, 200, 30, 400]
// console.log(arr)

// Insert
// arr.push(100)
// console.log(arr)

// Combining arrays
// const newArr = arr.concat(arr2)
// console.log(newArr)

// Find Index By value
// console.log(arr.indexOf(500))

// Remove
// arr.splice(3, 2)
// console.log(arr)


// JS Functions -> A way of creating seperate block of codes, to re-use them through the code / applications
// Q -> you are given with two nos, give the sum back as an answer

// SYNTAX -> function functionName( parameters ) { ...Your Operations }

// parameters -> a variable value which is assigned when the function comes to work

// function sum(num1, num2) {
//     // operation - print the sum of num1 and num2
//     console.log(num1 + num2)
// }

// function mySum(n1, n2) {
//     return (n1 + n2)
// }

// function square(sum) {
//     return sum * sum
// }

// use / call the function
// sum(100, 200)
// sum(10, 30)
// sum(100, 10)
// sum(50, 70)

// Q -> given two numbers, add the values and generate the square of the sum
// Eg -> 10, 20 O/P -> 900
// const add = mySum(10, 15)
// const add1 = mySum(2, 5)
// const add2 = mySum(1, 7)
// const add3 = mySum(8, 4)

// const res1 = square(add)
// const res2 = square(add1)
// const res3 = square(add2)
// const res4 = square(add3)

// console.log(res1, res2, res3, res4)

// Q -> given a value of marks a student in 5 subjects, you have to tell whether the student is fail(percentage < 30%) or pass(percentage >= 31)

// function sum(marks) {
//     sumation = 0
//     for(let i=0; i < marks.length; i++) {
//         sumation += marks[i]
//     }

//     // console.log(sumation)
//     return sumation
// }

// function calculatePercent(total) {
//     const percent = (total / 500) * 100
//     return percent
// }

// function checkResult(percentage) {
//     if(percentage < 30) {
//         return -1
//     } else {
//         return 1
//     }
// }

// function checkPassOrFail(marksArray) {
//     const sumOfMarks = sum(marksArray)
//     const percentageOfMraks = calculatePercent(sumOfMarks)
//     const ifFailOrPass = checkResult(percentageOfMraks)

//     if(ifFailOrPass === -1) {
//         return "Fail"
//     } else {
//         return "Pass"
//     }
// }

// // Q -> given an array, find the sum of the elements in the array
// // Q -> given an array, sum the values and cube the result
// // Q -> given with array, find if the sum is greater than 200 or not

// const marks_1 = [10, 20, 30, 40, 50]
// const reuslt_1 = checkPassOrFail(marks_1)
// console.log(`Your result is ${reuslt_1}`)

// const marks_2 = [10, 20, 30, 40, 10]
// const reuslt_2 = checkPassOrFail(marks_2)
// console.log(`Your result is ${reuslt_2}`)

// function calculatePercent(total) {
//     if(typeof(total) === 'number') {
//         const percent = (total / 500) * 100
//         return percent
//     } else {
//         return -1
//     }
// }

// const res1 = calculatePercent([10, 20, 30, 40])
// console.log(res1)


// ES6 - ES2015 -> Arrow Functions -> to create an represent any function like a varaible

// function functionName(paramemters) {  ...body }

// Any varible in JS, is an Object
// YOUR FUNCTIONS SHOULD ALSO BE TREATED AS OBJECTS IN JS, BY CRETAING FUNCTIONS AS VARIABLES

// SYNTAX 
// const functionName = ( parameters ) => { ...body }

// function sum(n1, n2) {
//     if(typeof(n1) === 'number' && typeof(n2) === 'number') {
//         return n1 + n2
//     } else {
//         return "Invalid Input"
//     }
// }

// const newSum = (num1, num2) => {
//     if(typeof(num1) === 'number' && typeof(num2) === 'number') {
//         return num1 + num2
//     } else {
//         return "Invalid Input"
//     }
// }

// console.log(typeof(newSum))

// const ans1 = sum(100, 200)
// console.log(ans1)

// const ans2 = newSum(10, 20)
// console.log(ans2)

// * 
// * *
// * * *
// * * * *
// * * * * *
// const n = 50
// let starString = ''
// // Manage row (rows = 5)
// for(let row = 0; row < n; row++) {
//     // Manage Coloumns (cols = 5) 
//     for(col=0; col < row + 1; col++) {
//         // process.stdout.write("*")
//         // starString.concat('* ')
//         starString += '* '
//         // console.log('* ')
//     }
//     starString += "<br />"
//     // console.log("\n")
// }
// document.querySelector('#my-div').innerHTML = starString


// ARRAY METHODS
// 1. Array Constructor
// const arrayObj = new Array()
// arrayObj[0] = 100
// arrayObj[1] = 200
// arrayObj[2] = 300
// arrayObj[3] = 400
// console.log(arrayObj)

// console.log(ages.sort())

// Array Methods / Functions
// 1. add an element at the end of the array
// const newLength = ages.push(100)
// console.log(ages)
// console.log(newLength)

// 2. Remove an element from the array & returns the array of deleted elts.
// ages.splice(index, deleteCount, ...itemsToBeInserted)
// Variation 1 - only element one elt -> splice(index, 1)
// Variation 2 - only element multiple elt -> splice(index, noOfEltsToBeDeleted)
// Variation 3 - only element multiple elt, replace it with other elts -> splice(index, noOfEltsToBeDeleted, ...items)

// const deletedElts = ages.splice(4, 3, 200, 300, 400, 500)
// console.log(ages)
// console.log(deletedElts)

// // 3. Sort an array
// agesSample = [...ages]
// agesSample.sort()

// console.log(agesSample)

// ES6 Higher Order Array Methods -> theses methods will access each and every elt/object in the array
// const employees = [
//     {id: 10021, name: 'Employee 1', designation: 'IT', start: 1987, end: 2022},
//     {id: 10022, name: 'Employee 2', designation: 'Sales', start: 2010, end: 2012},
//     {id: 10023, name: 'Employee 3', designation: 'HR', start: 1999, end: 2017},
//     {id: 10024, name: 'Employee 4', designation: 'Technical', start: 1981, end: 2018},
//     {id: 10025, name: 'Employee 5', designation: 'IT', start: 2000, end: 2005},
//     {id: 10026, name: 'Employee 6', designation: 'IT', start: 1997, end: 2008},
//     {id: 10027, name: 'Employee 7', designation: 'Technical', start: 1999, end: 2009},
//     {id: 10028, name: 'Employee 8', designation: 'HR', start: 1991, end: 2004},
//     {id: 10029, name: 'Employee 9', designation: 'Sales', start: 1993, end: 2013},
//     {id: 10030, name: 'Employee 10', designation: 'HR', start: 1986, end: 2020},
//     {id: 10031, name: 'Employee 11', designation: 'Sales', start: 1980, end: 2009}
// ]
// const ages = [21, 18, 15, 28, 43, 65, 46, 79, 57, 90, 59, 12, 1, 74]

// Q -> From the employees array, loop around the array and print the name of each employee
// for(let employee=0; employee < employees.length; employee++) {
//     console.log( employees[employee].end )
// }

// 1. forEach() -> Common operation on all the elts.
// Syntax -> arrayName.forEach( (iteratingValue, index, array) => {} )

// employees.forEach( (employee) => {console.log(employee.name)} )
// ages.forEach( (age, index) => console.log(index) )

// ages.forEach( (age) => {console.log(`Age is ${age + 5}`)} ) 

// 2. map() -> Maps to a aprticular property/element in the array
// employees.map( (employee, index, array) => {console.log(`The name of the employee with Employee ID of ${employee.id} is ${employee.name} which is at index ${index}`, array)} )
// const employeeNames = employees.map( (employee) => employee.name )
// console.log(employeeNames)
// const addedAges = ages.map( age => age + 5 )
// for(let i=0; i < employees.length; i++) {
//     ages[i] = addedAges[i]
// }
// // console.log(addedAges)
// console.log(ages)

// Q -> Diff b/w map and forEach

// 3. filter()
// const employeesOver5Years = employees.filter( (employee) => employee.designation === 'IT' )
// console.log(employeesOver5Years)
// const canDrink = ages.filter(age => age >= 18 && age <= 50)
// console.log(canDrink)

// const employees = [
//     {id: 10021, name: 'Employee 1', designation: 'IT', start: 1987, end: 2022},
//     {id: 10022, name: 'Employee 2', designation: 'Sales', start: 2010, end: 2012},
//     {id: 10023, name: 'Employee 3', designation: 'HR', start: 1999, end: 2017},
//     {id: 10024, name: 'Employee 4', designation: 'Technical', start: 1981, end: 2018},
//     {id: 10025, name: 'Employee 5', designation: 'IT', start: 2000, end: 2005},
//     {id: 10026, name: 'Employee 6', designation: 'IT', start: 1997, end: 2008},
//     {id: 10027, name: 'Employee 7', designation: 'Technical', start: 1999, end: 2009},
//     {id: 10028, name: 'Employee 8', designation: 'HR', start: 1991, end: 2004},
//     {id: 10029, name: 'Employee 9', designation: 'Sales', start: 1993, end: 2013},
//     {id: 10030, name: 'Employee 10', designation: 'HR', start: 1986, end: 2020},
//     {id: 10031, name: 'Employee 11', designation: 'Sales', start: 1980, end: 2009}
// ]
// const ages = [21, 18, 15, 28, 43, 65, 46, 65, 57, 90, 59, 12, 1, 74]
// const smallAgesArray = [21, 12, 9]

// 4. sort()
// const sortedAges = ages.sort( (num1, num2) => {
//     if(num1 < num2) {
//         return -1
//     } else if(num1 > num2) {
//         return +1
//     } else {
//         return 0
//     }
// } )

// const sortedAges = ages.sort( (a, b) => b - a )
// console.log(sortedAges)

// 5. reduce()
// array.reduce( (itrValue, initialVariable) => { return operation }, initialValue )
// const accumalatedResult = smallAgesArray.reduce((age, currentResult) => {return age + currentResult})
// console.log(accumalatedResult)

// Nest each array methods
// Q -> Names of all the employees who's dept is IT
// const employeeNames = employees.map(emp => emp.name)
// const filterArray = employees.filter(employee => employee.designation === 'IT').map(employee => employee.name)
// console.log(filterArray)


// JS Strings & String Methods -> String is an array pool of charachters, where each char is accessed by an index value.

// Way 1 = Using '', "", ``
// const str1 = 'Hello...'
// const str2 = "Hello..."
// const str3 = `This is a string`

// Way 2 - String Constructor
// const myStr = new String('This is a sample String')

// NEGATIVE INDEXING WORK IN JS BUT USING A SPECIAL METHOD
// console.log( myStr[-1] )     THIS IS WRONG

// STRING METHODS - 
// 1. charAt()
// const myChar = str3.charAt(6)
// const myChar2 = str3.charAt(-3)     // returns a null string (\0)
// console.log(myChar)

// 2. at() -> Positive + Negetaive
// console.log( str3.at(-1) )
// console.log( str3.at(-2) )

// 3. endsWith() -> T / F -> condition being statidfied
// if( myStr.endsWith('i') ) {
//     console.log('Yes, ends with g')
// } else {
//     console.log('No, doesnt end with g')
// }

// 4. startsWith -> T/ F
// if( myStr.startsWith('t') ) {
//     console.log('Yes, starts with T')
// } else {
//     console.log('No, doesnt end with T')
// }

// 5. contains()
// if( myStr.includes('is not a') ) {
//     console.log('Yes, includes is a')
// } else {
//     console.log('No, doesnt include is a')
// }

// 6. Escape Sequences -> 
// const myStr = new String('This is a sample String')

// const str1 = 'Hello...'
// const str2 = "hello..."
// const str3 = `This is a string`

// if( myStr.includes('is not a') ) {
//     console.log('Yes, includes is a')
// } else {
//     console.log('No, doesn\'t include \"is a\"')
// }

// console.log('Hello...\nExample of Line Break')
// console.log('Hello...\tExample of Line Break')
// console.log('Hello...\\ Example of Back Slash')


// 7. toLowerCase() vs. toUpperCase()
// console.log( str1.toUpperCase() )
// console.log( str1.toLowerCase() )

// 8. comparision between strings
// if(str1.toUpperCase() == str2.toUpperCase()) {
//     console.log('Yes, they are same')
// } else {
//     console.log('No, they are not same')
// }

// Special Charchaters -> ASCII Codes
// for(let i=65; i <= 122; i++) {
//     console.log(`ASCII Symbol for ${i} is `, String.toString(i))
// }

// 7. toString()
// console.log(String.toString("H"))

// 8. concat()
// let str1 = 'this is'
// let str2 = 'the complete string'
// // const completeString = str1.concat(' ', str2, '. And this is the continuation')
// const completeString = str1 + " " + str2 + ". And this is the continuation"
// console.log(completeString)

// const sampleStr = "Apple, Banana, Orange, Pear, Watermelon, Mango"
// const sampleNumberString = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
// // 9. split()
// const fruits = sampleStr.split(', ')
// console.log(fruits)


// const nums = sampleNumberString.split(', ')
// console.log(nums)

// 10. slice()

// 11. join()

// 12. replace()

// function multiply(a, b) {
//     if(typeof(a) === 'number' && typeof(b) === 'number') {
//         return a * b
//     } else {
//         return "Invalid Input"
//     }
// }

// SYNTAX -> 
// const variableName/funcName = (params) => { ...bodyOfFunc }
// ES6 Arrow Functions
// const multiplyTowNos = (num1, num2) => {
//     if(typeof(num1) === 'number' && typeof(num2) === 'number') {
//         return num1 * num2
//     } else {
//         return "Invalid Input"
//     }
// }

// const ans1 = multiplyTowNos(20, 33)
// console.log(ans1)

// const str1 = 'Hello, Welocme to JS'
// const convertedArray = []
// for(let i=0; i < str1.length; i++) {
//     convertedArray.push(str1.charAt(i))
// }
// console.log(convertedArray)


// [2, 3, 4, 1, 2, 4, 5]
// D -> 1 - 31 = 7
// M -> 1 - 12 = 3
// count = 0 -> 1 -> 2 

// M digit sequence
// D addition M digit dequence

// const arr = [2, 3, 4, 1, 2, 4, 5]
// // console.log(arr)
// const slicedArray = arr.slice(0, 5)
// console.log(slicedArray)

// // arr.reduce( (val1, val2) => OPERATION, initialValue )
// const totalSum = arr.reduce( (val1, val2) => val1 + val2, 0)
// console.log(totalSum)
// 1st iteration - 
// val1 = 2, val2 = 3
// temp = 0
// temp = temp + val1 + val2
// temp = 0 + 2 + 3 = 5

// 2nd Iteration
// val1 = 4, val2 = 1
// temp = 5
// temp = temp + num1 + num2
// temp = 5 + 4 + 1 = 10

// const arr = [2, 3, 4, 1, 1, 2, 2, 4, 5]
// console.log(arr)

// const newArray = arr.filter( elt => elt === 1 )
// console.log(newArray)

// console.log( arr.indexOf(2) )   // returns you the starting index found in the array
// console.log( arr.lastIndexOf(2) )

// let s = 'Hello'
// console.log( s.length )

// const myArray = []
// myArray.in

// const myArr = [ 'p', 'e', 'p', 'e' ]
// console.log( myArr.sort( ) )
// console.log('A' + 1)



// OBJECTS -> A way of represting any data/info in the form of key: value
// ARRAYS AND OBJECTS BOTH ARE REFERENCE TYPE

// 1. Using Object Literal - {  }
// const myObj = {
//     // type(str): constant(int, str, bool, [], {}, ... )
//     property1: 'value1',
//     property2: 100,
//     property3: [10, 20, 30, 100, 300],
//     property4: { p1: 'v1', p2: 'v2', p3: 'v3' }
// }
// myObj.property5 = 'New Introduced Property'
// const myObjCopy = { ...myObj }
// console.log(myObjCopy)
// // console.log(myObj)

// 2. Using Object() Constructor
// const users = new Object()
// users.userName = 'User Name'
// users.password = 'my_user_pwd'
// users.address = new Object()
// users.address.street = 'My Street - 1'
// users.address.city = 'My City'
// console.log(users)

// 3. Using Constructor Function
// function myUser(userId, userName, userEmail, userAddress, userHobbies) {
//     this.id = userId
//     this.name = userName
//     this.email = userEmail
//     this.address = userAddress
//     this.hobbies = userHobbies

//     this.change = (newName) => {
//         this.name = newName
//     }

//     this.changeData = function(newId, newName, newEmail) {
//         this.name = newName
//         this.id = newId,
//         this.email = newEmail
//     }
// }

// const userOne = new myUser(100, 'User One', 'userOne@xyz.com', {city: 'XYZ', state: 'ABC'}, ['h1', 'h2', 'h3'] )
// console.log(userOne)

// userOne.change('Harish')
// console.log(userOne)

// console.log( Object.keys(userOne) )
// console.log( Object.values(userOne) )

// let newStr = ''
// let oldStr = 'JavaScript'
// let charArr = []

// for(let i=0; i < oldStr.length; i++) {
//     charArr.push(oldStr.charArr(i))
// }

// charArr[4] = 's'

// for(let i=0; i < oldStr.length; i++) {
//     newStr += oldStr.charAt(i)
// }