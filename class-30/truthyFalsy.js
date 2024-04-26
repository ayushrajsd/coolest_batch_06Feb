const falsyValues = [false, 0, -0, "", null, undefined, NaN];

falsyValues.forEach((value) => {
    if(value){
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
})

const truthyValues = [true, 1, -1, "0", "false", "true", {}, [], function(){}];
console.log("====================================");
truthyValues.forEach((value) => {
    if(value){
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});