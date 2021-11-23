//https://www.youtube.com/watch?v=IkuWJSYqFAw

//nums = [2, 7, 11, 15], target = 9

//method 1: Brute Force
function twoSum(nums) {
    const target = 9
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

twoSum([2, 7, 11, 15]) //[0,1] -- index of array -- O(N^2)

//method 2: dictionary/key-value pair {} --reverse!! -- O(N)

function twoSumD(nums) {
    const target = 9
    let i = null, j = null
    let seen = {} //memo; reverse {value: index}
    nums.map((num, index) => {
        if (!(num in seen)) {
            seen[num] = index
        }
        if (target - num in seen) {
            //console.log(seen[target-num], index)
            i = seen[target - num]
            j = index
        }
    })
    console.log(seen)
    return [i, j]
}
twoSumD([2, 7, 11, 15])
twoSumD([2, 11, 3, 5, 6, 7])
