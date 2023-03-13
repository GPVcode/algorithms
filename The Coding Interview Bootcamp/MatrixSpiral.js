/*
 * 
 * Coding Exercise - Matrix Spiral
 * Write a function that accepts an integer N and returns a NxN spiral matrix.
 * 
 * Examples:
 * 
 * matrix(2);
 *     [[1, 2],
 *      [4, 3]]
 *  
 * matrix(3);
 *     [[1, 2, 3],
 *      [8, 9, 4],
 *      [7, 6, 5]]
 *  
 * matrix(4);
 *     [[1,   2,  3, 4],
 *      [12, 13, 14, 5],
 *      [11, 16, 15, 6],
 *      [10,  9,  8, 7]]
 * 
*/
/*
Core Understanding:
    return an array matrix where the numbers create a spiral
Devising a Plan:
    length equals n
    levels equals n
    last number is n-squared

Coding it Out:
*/
function matrix(n) {
    let results = [];                         //create empty array of arrays called 'results
    
    for(let i = 0; i < n; i++){               //set up results array
        results.push([]);                     //set up space in results
    }
    let counter = 1;                          //create a counter variable, starting at 1
    let startColumn = 0, endColumn = n - 1;   //create pointers for column
    let startRow = 0, endRow = n - 1;         //create pointers for rows
    
    //as long as (start column <= end column) AND (start row <= end row)
    while(startColumn <= endColumn && startRow <= endRow){
        //this for loop handles TOP ROW
        for(let i = startColumn; i <= endColumn; i++){  
            //at results[start_row][i] assign counter variable                     
            results[startRow][i] = counter;                         
            counter++;                                                     
        }
        startRow++ 
        //This for loop handles right column                                                       
        for(let i = startRow; i <= endRow; i++){    
            //At results[i][end_column] assign counter variable           
            results[i][endColumn] = counter;               
            counter++;                                   
        }
        endColumn--; 
        //this for loop handles last row. Loop from end column of last row to start column
        for(let i = endColumn; i >= startColumn; i--){  
            //At results[endRow][i], assign counter variable             
            results[endRow][i] = counter                            
            counter++;                                                    
        }
        endRow--; 
        //this for loop handles left column
        for(let i = endRow; i >= startRow; i--){  
            //At results[endRow][i], assign counter variable             
            results[i][startColumn] = counter                            
            counter++;                                                    
        }
        startColumn++;
    }
    return results
}
console.log("matrix:", matrix(3))
