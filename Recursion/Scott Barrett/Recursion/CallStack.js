function funcThree(){
    console.log('Three');
}

function funcTwo(){
    funcThree();
    console.log('Two');
}

function funcOne(){
    funcTwo();
    console.log('One')
}

console.log(funcOne())


// Factorial

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(8))