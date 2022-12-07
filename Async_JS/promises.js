const posts = [
    {id: 1, name: 'Post One', desc: 'Post One Desc'},
    {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
    {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
    {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
    {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
]

// Promises are a advance callback which accepts two more callbacks -> resolve() & reject() -> ERROR HANDLING

// Side-Effect
const createPost = (post) => {
    return new Promise( (resolve, reject) => {
        const error = false
        if(error) {
            console.log('Soething went wrong')
            reject()
        } else {
            setTimeout( () => {
                posts.push(post)
                resolve()
            }, 3000 )
        }
    } )
}

const showPosts = ( ) => {
    setTimeout( () => {
        posts.forEach( post => console.log(post.name) )
    }, 5000 )
}

// Execute / Handle a promise
// SYNTAX :- function_with_promise.then( body_of_resolve ).catch( body_of_reject )

createPost( {id: 6, name: 'Post Six', desc: 'Post Six Desc'} )
    // .then( reolve() )
    .then( () => showPosts() )
    // .catch( reject )
    .catch( () => console.log('Error Occured.') )