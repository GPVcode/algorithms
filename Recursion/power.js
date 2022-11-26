//Using recursion, write a function called power which accepts a base and an exponent. 

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1)
}


// power(2, 4)
// 2 * 2 * 2 * 2 * 1 = 16