/*
 * [121. Best Time to Buy and Sell Stock] - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
*/

/*
Core Understanding:
    Find the highest difference in the array. You cannot go backwards
Devising a Plan:
    set up highest number tracker
    iterate through each number using nested loops
        if difference is higher than current highest, update our tracker
    return tracker at the end
Coding it Out: Brute Force
*/
const maxProfit = function(prices) {
    //create tracker
    let highestProfit = 0;

    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] - prices[i] > highestProfit){
                highestProfit = prices[j] - prices[i];
            }
        }
    }
    return highestProfit
};

console.log("maxProfit:", maxProfit([7,1,5,3,6,4]))


const maxProfit2 = function(prices) {
    let maxDiff = 0;
    let minVal = prices[0];
    for (let i = 1; i < prices.length; i++){ 
        minVal = Math.min(minVal, prices[i]); //minVal = 1
        let currDiff = prices[i] - minVal; // currDiff = 4 - 1 = 3
        if(currDiff != maxDiff)
        maxDiff = Math.max(maxDiff, currDiff); // max between 5 and 3
    }
    return maxDiff; // 5
};

console.log("maxProfit2:", maxProfit2([7,1,5,3,6,4]))