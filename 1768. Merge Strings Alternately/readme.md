# Objective
Understand and implement the logic begind merging two strings alternatively and recognize its time and space complexities.

# Engage
Who likes weaving? When we weave, we alternate strands to create something new, right? Today, we weave with words, or more specifically, characters in string!

# Understanding the Problem
Alternately take characters from word1 and word2 and combine them. If one word finishes before the other, append the remaining characters of the other word.

# Approach
- Use two pointers, one for each string
- As long as either pointer hasn't reached the end of its string, take a character from word1 if possible, then word 2 if possible.

```
JavaScript

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
```

```
Python

def mergeAlternately(word1, word2):
    res = []   # This will store our merged characters.
    i, j = 0, 0  # Two pointers, one for each word.
    
    # While either word has characters left.
    while i < len(word1) or j < len(word2):
        if i < len(word1):
            res.append(word1[i])
            i += 1
        if j < len(word2):
            res.append(word2[j])
            j += 1
    
    # Join the characters together to get the result string.
    return ''.join(res)
```

# Engage 
Why is this useful? Imagine building a tool for designers where they want to merge patterns from two designs. This algorithm can help with that! The world of algorithms is all around us!

# Evaluate:

Let's try a couple of problems to practice!

word1 = "apple", word2 = "orange"
word1 = "hello", word2 = "world"

# Summary:
Great job today! We've taken two strings and merged them together, taking characters alternately. This is not just about merging words but about understanding the pattern and applying it elsewhere. Keep looking for patterns in the world around you!

### Keep the Spark Alive: 
Think of where else alternating patterns might be useful. Maybe in music, art, or some game they play? Algorithms are everywhere, and the ability to see the world algorithmically is a superpower!
