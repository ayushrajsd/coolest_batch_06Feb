/**
 * I/p: [1, 2, [3, 4, [5, 6, [9,12]], 7], 8]
 * O/p: [1, 2, 3, 4, 5, 6, 7, 8]
 * I?p" {a: 1, b: {c: 2, d: {e: 3, f: 4}}
 */

function flattenArray(arr){
   return arr.reduce((flatArray,item)=>{
    // logic to flatten the array
    if(Array.isArray(item)){
        // flatten it
        flatArray.push(...flattenArray(item))
    } else{
        // push the item to flatArray
        flatArray.push(item)
    }
    return flatArray
   },[]) 
}
