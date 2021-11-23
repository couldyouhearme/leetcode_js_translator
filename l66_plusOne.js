//ref:https://www.youtube.com/watch?v=WQMURqqQxk8
//easy

//method 1: type conversion
//numArr -> int -> int+1 -> newNumArr
function plusOne(digits) {
    let num = digits.join("") * 1
    num += 1
    let newNumArr = [...num.toString()]
    return newNumArr
}

//method 2: reverse list addition
function plusOne_rl(digits) {
    let len = digits.length
    for (i = len - 1; i > -1; i--) {
        //console.log('i',i) // 'i' is before i--
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] += 1
            return digits
        }
    }
    // corner case: add "1" at the head of numArr
    digits.unshift(1) //arr.unshift() returns new length of arr
    return digits
}

//test: ok!
//let d1=[1, 2, 3] ->[1, 2, 4]
//let d2=[1,9] ->[2, 0]
//let d3=[9,9,9]->[1,0,0,0]
