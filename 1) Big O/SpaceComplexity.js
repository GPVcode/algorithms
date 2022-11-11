function Boooooo(n){
    for(let i = 0; i< n.length; i++){
        console.log('booooo');
    }
}
//I see just 1 variable being stored that uses memory
//therefore the space complexity of
Boooooo([1,2,3,4,5]) 
//is 0(1)

////////////////////////////////////////////

function arrayOfHinTimes(n){
    let hiArray = []; //new array
    for(let i = 0; i< n.length; i++){ 
        hiArray[i] = 'hi';//new data per loop
    }
    return hiArray;
}
//The space complexity of this function
arrayOfHinTimes(6)
//is O(n) because Rule 2 states that we drop constants
