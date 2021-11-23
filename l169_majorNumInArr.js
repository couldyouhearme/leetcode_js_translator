// find majority in num array leetcode 169

let nums1 = [2, 3, 3] //output:3
let nums2 = [2, 2, 1, 1, 1, 2, 2,] //output:2

//Method 1:
//Boyer–Moore majority vote algorithm --balance-out??
//ref:https://www.youtube.com/watch?v=M1IL4hz0QrE

var majorityElement = function (nums) {
    let candidate = nums[0]
    let count = 1
    for (var i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }
        if (candidate === nums[i]) {
            count += 1
        } else {
            count -= 1
        }
    }
    return candidate
};

//Method 2: countTable {}
//count each elements
// nums2 = [2, 2, 1, 1, 1, 2, 2,] => convert to key-value pair
// count = {
//     //name: 'julia',
//     2: 4,
//     1: 3
// }
//ref: https://www.youtube.com/watch?v=eqX3WZGpma4

var majorityElement2 = function (nums) {
    let count = {}
    let candidate = null
    for (var i = 0; i < nums.length; i++) {
        let key = nums[i]
        if (key in count) {
            count[key] += 1
        } else {
            count[key] = 1
        }
        // more effeicient if put length compare here! 
        if (count[key] > nums.length / 2) {
            candidate = key
        }
    }
    console.log(count)
    return candidate
}

// simplify majorityElement2 with "in" and array.map()
var majorityElement3 = nums => {
    let countTable = {}
    let majorNum = null
    nums.map(num => {
        if (num in countTable) {
            countTable[num] += 1
        } else {
            countTable[num] = 1
        }
        console.log("countTable:", countTable)
        if (countTable[num] > nums.length / 2) {
            majorNum = num
        }
    })
    return majorNum
}

// Method 3:
// sort array =>



//test method1
majorityElement(nums1)
majorityElement(nums2)

