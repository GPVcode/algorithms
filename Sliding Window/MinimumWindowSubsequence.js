/*INITALIZE VARIABLES
- First lets initialize the variables.
- Create two variables, sizeS and sizeT to store the lengths. 
- Next, initialize the length to infinity. Note: length variable is used to store the length of the minimum subsequence, so lets initially set it to a very high number. 
- Next, initialize indexS1 and indexS2 to 0 to start at the first character of each string/input. These will be used to traverse S and T and find the subsequence.
- Further, minSubsequence variable is initialized to an empty string and will be used to store the output which is the smallest possible subsequence. 
*/
function minWindow(S, T){
    // Save the size of S and T
    let sizeS = S.length,
    sizeT = T.length;

    // Initialize length to a very large number(infinity)
    let length = Infinity;
    // Initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0, indexS2 = 0, minSubsequence= "";

    return [sizeS, sizeT]
}


/*TIME TO LOOP
- After initializing the variables, lets process characters from S. Outer loop slides the pointer (indexS1) on each iteration. We do this so that all characters of S is processed throughout.  
- in our first while loop, we will check if the character pointed by indexS1 is the same character of str2, if so, slide indexS2 pointer so that it points to the next character of T. 
- Next, check if the entire T string has been discovered in S. if so, we create two more pointers, "start" and "end". The "start" pointer points to the index where all characters of T were present in S. The "end" pointer points to an index one greater than the start index. With these two pointers we slide the window backwards.
*/


function minWindow(S, T){
    // Save the size of S and T
    let sizeS = S.length,
    sizeT = T.length;

    // Initialize length to a very large number(infinity)
    let length = Infinity;
    // Initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0, indexS2 = 0, minSubsequence= "";

    return [sizeS, sizeT]

    //Process each character of S
    while(indexS1 < sizeS){
        //check if cahracter pointed by indexS1 in S is the same character pointed by indexS2 in T. 
        if(S[indexS1] == T[indexS2]){
            // if the pointed character is the same in both strings, increment IndexS2
            indexS2++;
        }
        // Check if indexS2 has reached the end of str2
        if(indexS2 == sizeT){
            // At this point, S containes all characters of T
            let start = indexS1, end = indexS1+1;
        }
    }
    //Increment pointer indexS1 to next character in str1
    indexS1++;
}

/*
At this point, we've found all the required characters. IndexS2 pointer is pointing to the end of T, so let's move it backwards. 
- we will also point the start pointer backwards.
- By the time the value of indexS2 becomes negative, it is implied that start is pointing to the index that conatins all characters of T.
*/
function minWindow(S, T){
    // Save the size of S and T
    let sizeS = S.length,
    sizeT = T.length;

    // Initialize length to a very large number(infinity)
    let length = Infinity;
    // Initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0, indexS2 = 0, minSubsequence= "";

    return [sizeS, sizeT]

    //Process each character of S
    while(indexS1 < sizeS){
        //check if cahracter pointed by indexS1 in S is the same character pointed by indexS2 in T. 
        if(S[indexS1] == T[indexS2]){
            // if the pointed character is the same in both strings, increment IndexS2
            indexS2++;
        }
        // Check if indexS2 has reached the end of str2
        if(indexS2 == sizeT){
            // At this point, S containes all characters of T
            let start = indexS1, end = indexS1+1;

            //initialize start to the index where all characters of T were present in S
            indexS2--;
            // Decrement pointer indexS2 and start a reverse loop
            while(indexS2 >= 0){
                //Decrement pointer indexS2 untill all characters of T are found in S
                if(S[start] == T[indexS2]) indexS2 -= 1;
                // Decrement start pointer everytime to find the starting point of the required subsequence
                start -= 1;
            }
            start++;
        }
    }
    //Increment pointer indexS1 to next character in str1
    indexS1++;
}



/*
- Next, check if the length of this current subsequence beteween pointers start and end is less than our existing minimum length. if so, length is updated to the length of this new subsequence. Then minSubsequence is updated to the string  in S pointed by these two pointers.
*/


function minWindow(S, T){
    // Save the size of S and T
    let sizeS = S.length,
    sizeT = T.length;

    // Initialize length to a very large number(infinity)
    let length = Infinity;
    // Initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0, indexS2 = 0, minSubsequence= "";

    return [sizeS, sizeT]

    //Process each character of S
    while(indexS1 < sizeS){
        //check if cahracter pointed by indexS1 in S is the same character pointed by indexS2 in T. 
        if(S[indexS1] == T[indexS2]){
            // if the pointed character is the same in both strings, increment IndexS2
            indexS2++;
        }
        // Check if indexS2 has reached the end of str2
        if(indexS2 == sizeT){
            // At this point, S containes all characters of T
            let start = indexS1, end = indexS1+1;

            //initialize start to the index where all characters of T were present in S
            indexS2--;
            // Decrement pointer indexS2 and start a reverse loop
            while(indexS2 >= 0){
                //Decrement pointer indexS2 untill all characters of T are found in S
                if(S[start] == T[indexS2]) indexS2 -= 1;
                // Decrement start pointer everytime to find the starting point of the required subsequence
                start -= 1;
            }
            start++;

            // Check is length of sub sequence pointed by start and end pointer is less than current min length
            if(end - start < length){
                // update length if current sub sequence is shroter
                length = end - start;
                //update minimum subsequence string to this new shorter string
                minSubsequence = S.substring(start, end);
            }
        }
    }
    //Increment pointer indexS1 to next character in str1
    indexS1++;
}


/*
Lastly, rest the indexS2 pointer to 0 so that it points to the start of T and we update the indexS1 pointer to the value of the start pointer.
*/

function minWindow(S, T){
    // Save the size of S and T
    let sizeS = S.length,
    sizeT = T.length;

    // Initialize length to a very large number(infinity)
    let length = Infinity;
    // Initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0, indexS2 = 0, minSubsequence= "";

    return [sizeS, sizeT]

    //Process each character of S
    while(indexS1 < sizeS){
        //check if cahracter pointed by indexS1 in S is the same character pointed by indexS2 in T. 
        if(S[indexS1] == T[indexS2]){
            // if the pointed character is the same in both strings, increment IndexS2
            indexS2++;
        }
        // Check if indexS2 has reached the end of str2
        if(indexS2 == sizeT){
            // At this point, S containes all characters of T
            let start = indexS1, end = indexS1+1;

            //initialize start to the index where all characters of T were present in S
            indexS2--;
            // Decrement pointer indexS2 and start a reverse loop
            while(indexS2 >= 0){
                //Decrement pointer indexS2 untill all characters of T are found in S
                if(S[start] == T[indexS2]) indexS2 -= 1;
                // Decrement start pointer everytime to find the starting point of the required subsequence
                start -= 1;
            }
            start++;

            // Check is length of sub sequence pointed by start and end pointer is less than current min length
            if(end - start < length){
                // update length if current sub sequence is shroter
                length = end - start;
                //update minimum subsequence string to this new shorter string
                minSubsequence = S.substring(start, end);
            }
            //set indexS1 to start to continue checking in S after this discovered subsequence
            indexS1 = start
            indexS2 = 0
        }
        //Increment pointer indexS1 to next character in str1
        indexS1++;
    }
    return minSubsequence;d
    
}