const toys = {
    toy1:{name:"Teddy Bear", color:"Brown"},
    toy2:{name:"Race Car", color:"Red"},
    toy3:{name:"Doll", color:"Pink"}
}
console.log(toys);

const toysJSONString = JSON.stringify(toys); //  convert object to JSON string
console.log("Packed Toys:", toysJSONString);

// unpacking JSON string to object
const unpackedToys = JSON.parse(toysJSONString); // convert JSON string to object
console.log("unopacked toys", unpackedToys);