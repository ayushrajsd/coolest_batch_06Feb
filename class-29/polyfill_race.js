Promise.myRace = function(promises){
    return new Promise((resolve, reject) => {
        if(promises.length === 0){
            throw new TypeError("No promises to resolve");
        }
        promises.forEach(promise=>{
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        })
    })
}