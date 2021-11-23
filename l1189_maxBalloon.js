// Hash Table
// number of "nlaebolko" => 1

var str = "nlaebolko"
// relative positive - freq: {0: 1, 1: 1, 4: 1, 10: 1, 11: 1, 13: 1, 14: 1}

function maxBalloon(str) {
    // creat an empty hash table "a-z" -> {a:2, b:3, ...}
    let countTable = {}
    //convert string to array
    let arr = [...str]
    arr.map(char => {
        console.log(char)
        if (char in countTable) {
            countTable[char] += 1
        } else {
            countTable[char] = 1
        }
    })
    console.log(countTable) //{'a':1,'b':1, ...}

    //creat function for conversion: 'a' -> 0, 'b' -> 1
    function indexChar(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt()
    }

    //creat a new Hash Table ct after conversion
    let ct = {}
    for (key in countTable) {
        ct[indexChar(key)] = countTable[key]
    }
    console.log(ct)

    //balloon = {1,0,  }
    return Math.min(ct[1], Math.min(ct[0], Math.min(ct[11] / 2, Math.min(ct[14] / 2, ct[13]))))
}

maxBalloon(str)