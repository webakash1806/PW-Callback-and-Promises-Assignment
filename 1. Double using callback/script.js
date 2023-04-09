function doubleCallback(arrInt, callback) {
    let doubleArr = arrInt.map((num) => {
        return callback(num)
    })
    return doubleArr
}


let originalArr = [1, 2, 3, 4]

function callback(num) {
    return num * 2;
}

const doubledArr = doubleCallback(originalArr, callback)
console.log(doubledArr);