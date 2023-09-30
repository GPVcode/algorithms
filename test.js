function arrayDiff(a, b) {
  let newArr = []
  for(let i = 0; i < a.length; i++){
    let aContainsValue = false;
    for(let j = 0; j < b.length; j++){
      if(a[i] === b[j]) aContainsValue = true;
    }
    if(!aContainsValue) newArr.push(a[i])
  }
  return newArr;
  }

console.log("arrayDiff:", arrayDiff(arrayDiff([1,2],[1]), [2]))