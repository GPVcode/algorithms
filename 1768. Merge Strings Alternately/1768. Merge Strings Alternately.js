var mergeAlternately = function(word1, word2) {
    let mergedStr = [];
    let i = 0;
    let j = 0;

    while(i < word1.length || j < word2.length){
        if(i < word1.length){
            mergedStr.push(word1[i]);
            i++;
            console.log("i", mergedStr)
        } 
        if(j < word2.length){
            mergedStr.push(word2[j]);
            j++
            console.log("j", mergedStr)
        }
    }
   
    return mergedStr.join('')
};