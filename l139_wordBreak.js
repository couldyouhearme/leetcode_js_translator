//Dynamic Programming: medium

//method 1
//string.substring(indexStart, indexEnd) 
//array.includes(searchElement, fromIndex) -> return true/false

// i move for position, j for scan dictWord
// if find one, set dp[index] to true

//Optimization: Max lengh of a wordArr
//method maxLength 1:
//step 1: array.map(callback) return a new (wordLength) array
//step 2: ...spread to normal arguments, not array args
//step 3: Math.max(...args)
function minLength(wordArr) {
    return Math.min(...wordArr.map(word => word.length))
}
//method maxLength 2:
//for...of
//ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
function maxLength(wordArr) {
    let maxLen = 0
    for (word of wordArr) {
        maxLen = Math.max(maxLen, word.length)
    }
    return maxLen
}
//test: 6
//maxLength(['always','look','on','the','bright','side','of','life']) 

function wordBreak(s, wordDict) {
    let n = s.length //8
    let maxLen = 0
    for (word of wordDict) {
        maxLen = Math.max(word.length, maxLen)
    }
    //console.log(maxLen)
    const dp = []
    dp[0] = true
    for (i = 0; i <= n; i++) {
        dp[i + 1] = false //fill the array with 'false'...works!
        for (j = i - 1; j >= 0; j--) { //j scan from close to i to further away -> reduce repeat of previous "T" --optimize 2
            if (i - j > maxLen) {
                continue //move j close to i for new loop --optimize 1
            }
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                //console.log(s.substring(j, i))
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
}

// let s = 'leetcode'
// let wordDict = ['leet', 'code']


//method 2: slice?