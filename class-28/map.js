/**
 * how actual map method works
 */
const arr = [1,2,4]
const result = arr.map((item) => item * 2)
console.log(result) // [2,4,8]

/**
 * implementation
 */
// check if Array.prototype.myMap is already defined
if(!Array.prototype.myMap){
   // define the method on Array prototype
   Array.prototype.myMap = function(callback, thisArg){
    // check if the callback is a function
    if(typeof callback !== 'function'){
        throw new TypeError(`${callback} is not a function`)
    }
    // output array size / length same as input array
    const val = new Array(this.length) // creating output array with same length as input array
    /**
     * loop through the input array
     * call the callback function with the current item, index and the input array
     * store the result in the output array
     */
    for(let i = 0; i < this.length; i++){
        if(i in this){
            // process the input value with the callback function
            const context = thisArg ? thisArg : this
            const mappedValue = callback.call(context,this[i], i, this) // callback -> (item) => item * 2
            val[i] = mappedValue // 1-> 1 ; 2-> 4 ; 4-> 8 ; [2,4,8]
        }
    }
    return val

   } 
}

// sparse arrays
const arr1 = [1,2,3,4]
delete arr1[1]
console.log(arr1) 
const ans = arr1.myMap((item) => item * 2) // [2,6,8]
console.log(ans) // [2,6,8]
