// return the index vlue if num exists in arr, if not, return -1
function linearSearch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}

//O(N) time complexity