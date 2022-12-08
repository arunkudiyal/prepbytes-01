// The moment application statrts, i want to load all the data from the API
// Reach to an API --> JS --> Class -> XMLHttpRequest
const xhr = new XMLHttpRequest()
const url = `https://api.github.com/users`
// const url = `https://api.github.com/users/${}`
console.log(`1st readyState value ${xhr.readyState}`)
// READYSTATE -> 0

// Step 1 - Open the portal of communication b/w the client and the server
xhr.open('GET', url)
// READYSTATE -> 1
console.log(`2nd readyState value ${xhr.readyState}`)

// Step2 - Perform actions on ready state change
xhr.onreadystatechange = () => {
    console.log(`3rd readyState value ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        let output = ''
        response.forEach( res => {
            output += `<img style="margin: 10px;" src="${res.avatar_url}" />`
        })
        document.querySelector('#main-content').innerHTML = output
    }
}

// Step 3 - Send the request
xhr.send()

// const url = `https://api.github.com/use`

// fetch(url)
//     .then(result => console.log(result.json()))
//     .catch(err => console.log(err))

const add = (a, b) => {
    return a + b
}