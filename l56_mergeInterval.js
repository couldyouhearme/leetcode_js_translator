
function mergeIntervals(intervals) {
    

}

//Input: intervals = [[1,3],[2,6],[8,10]]
//Output: [[1,6],[8,10]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


// method 1: fill intervals with nums -> sort -> remove duplication ->
let a = [1, 2, 3, 2, 3, 4, 5, 6, 8, 9, 10]
a.sort
let b = new Set([...a])
console.log(b)
 