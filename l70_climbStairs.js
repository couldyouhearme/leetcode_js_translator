
//classic dynamic programming
//L70: you are climbing a stair case. It takes n steps to reach to the top.
//Each time you can either climb 1 or 2 steps.
//In how many distinct ways can you climb to the top?
//n > 0

//analysis: to reach step 3
//either in step 2 + climb 1 step;
//or in step 1 + clinm 2 steps

function climbStairs(n) {
    if (n === 1) return n
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

//test:
let n = 5
climbStairs(5) // 8=5(reach step4)+3(reach step3)

//reduce space usage: O(n) -> O(1)
//use two constants instead of an array
function climbStairs_s(n) {
    if (n === 1) return n
    let oneStep = 1
    let twoStep = 2
    for (let i = 3; i <= n; i++) {
        let temp = twoStep
        twoStep = oneStep + twoStep
        oneStep = temp
    }
    return twoStep
}
