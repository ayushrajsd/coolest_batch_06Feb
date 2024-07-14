/**
 * Promise.all
 * I/P: Array of Promises
 * O/P: Promise - result is an array of resolved values
 * Rejection: If any of the promises is rejected, the promise returned by Promise.all is rejected
 */

function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({userId:1,name: 'John Doe', age: 30});
        }, 500);
    });
}

function fetchUserPosts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userId:1, posts: ['Post 1', 'Post 2', "post 3"]});
        },2000)
    })
}

Promise.all([fetchUserData(), fetchUserPosts()])
.then((results) => {
    console.log("User Data: ", results[0]);
    console.log("User Posts: ", results[1]);
})
.catch((error)=>{
     console.error("An error occured: ", error);
})