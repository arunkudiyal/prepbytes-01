// DOCUMENT OBJECT MODEL (DOM)
// console.dir(document)

// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.all[10])

// Properties of document
// console.log(document.all[10])
// 1. textContent --> change the text inside any given element
// document.all[10].textContent = 'New Item Lister'

// Q:- What is the diff b/w textContent and innerHTML
// 2. innerHTML --> Inserts a new HTML code (child) inside any givemn elt
// document.all[10].innerHTML = '<h3>Hi, Welcome to the app</h3>'
// console.log(document.all[10])


// DOM IDENTIFIER METHODS :-

// 1. id --> getElementById --> Returns a single element
// const headerTitle = document.getElementById('header-title')
// headerTitle.textContent = 'New Item Lister'
// console.log(headerTitle)

// 2. class --> getElementsByClassName --> Returns an array of all the elts
// const items = document.getElementsByClassName('list-group-item')
// for(let i=0; i < items.length; i++) {
//     console.log(items[i].textContent)
// }

// 3. element --> getElementsByTagName --> Returns an array of all the elts
// const headingTwo = document.getElementsByTagName('h2')
// for(let i=0; i < headingTwo.length; i++) {
//     console.log(headingTwo[i].textContent)
// }
// console.log(headingTwo)


// USING IDENTIFIER METHODS< HOW TO CHANGE CSS

// const items = document.getElementsByClassName('list-group-item')

// Q :- for alternative items (even), change the background-color property to gray
// for(let i=0; i < items.length; i++) {
//     // CHANGE CSS USING JAVASCRIPT
//     // identifier.style.cssProperty = 'newValue' 

//     // camelCasing Notation
//     // CSS --> background-color ; JS --> backgroundColor
//     // CSS --> margin-bottom ; JS -> marginBottom
//     if(i % 2 !== 0) {
//         items[i].style.backgroundColor = '#f6f6f6'
//     }
    
//     if(items[i].textContent === 'Item 5') {
//         items[i].style.color = 'purple'
//         items[i].style.textAlign = 'center'
//         // `url('./assets/img/img-1')`
//     }

// }

// document.getElementById('my-doc-body').style.background = `url('../HTML/assets/img/sample_img.jpg')`

// console.log(items)