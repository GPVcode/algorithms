function solution(str){
    // empty arr
    let result = [];

    let arr = str.split('')
    
    while(arr.length > 0){
    let enter = arr.splice(0,2)
    console.log("enter:", enter)
    console.log("str", arr)
  }
    return result   
  }

console.log("solution", solution('abcdef'))