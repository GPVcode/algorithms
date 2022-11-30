//#1 - Sort 10 schools around your house by distance:
//insertion sort - fast on small sets, short code.

//#2 - eBay sorts listings by the current Bid amount:
//radix or counting sort

//#3 - Sport scores on ESPN
// quick sort - most efficient, with regards to memory 

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort - have regard to performance due to massive memory

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insertion sort - most previous data might already be sorted

//#6 - Temperature Records for the past 50 years in Canada
// quick sort - have regard for memory

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort - if enough memory and memory 'isnt' too expensive
// quick sort - not worried about memory and dataset isnt too large

//#8 - You want to teach sorting for the first time
// bubble sort, selection sort


// when to use each sorting method
//QUICK SORT - when average performance matters more than the worst case performance O(nlogn) best O(n^2) worst good memory
//MERGE SORT - stable results if two items are the same, O(nlogn) best and worst , worse memory than quicksort 
//BUBBLE SORT - fairly easy to imple ment, not likely to use as it is inefficient
