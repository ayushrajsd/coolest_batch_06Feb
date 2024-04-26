function fetchUserData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({userId:1,name: 'John Doe', age: 30});
        }, 500);
    })
}

function fetchUserPosts(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject(new Error("Failed to fetch user posts").message);
        },2000)
    })
}

Promise.allSettled([fetchUserData(), fetchUserPosts()])
.then((results) => {
    console.log("User Data: ", results[0].value);
    console.log("User Posts: ", results[1]);
})
.catch((error)=>{
     console.error("An error occured: ", error);
})