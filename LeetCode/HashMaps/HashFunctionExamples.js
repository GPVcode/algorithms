// This file serves as note taker as I go through courses on Hashmaps

/* What makes a good hash?
*   how do we convert pink into a number?
*/
//This is my inital attempt
const hash = (str) => {
    let total = 0;
    // console.log(total)
    for(let i = 0; i < str.length; i++){
        total += str.charCodeAt(i) - 96;
        console.log("charCode value: ", str.charCodeAt(i) - 96);
    }

    return total % 10
    
}
// console.log(hash("pink"));

//This is the course example to turn string into number using maps
const hash1 = (key, arrayLen) => { //key = pink    value = 16 
    let total = 0; // total = (16 + 9) %arr length
    //character of key
    for(let char of key){
        // map "a" to 1, "b" to 2, "c" to 3
        let value = char.charCodeAt(0) - 96;
        console.log("key: ", key)
        console.log("char: ", char)
        console.log("value: ", value)
        total = (total + value) % arrayLen; // total = (16 + 9) % 10
    }

    return total
}
// console.log(hash1("cyan", 10))


///////////////////////////////////////////////////////////

// A HashTable Class
class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        } 
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        return index;
    }
    get(key){

    }

}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")