function sumZero(arr){
    const left = 0
    const right = arr.length -1
    while (left < right){
        const sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

// sumZero([-4,-2,-1,0,2,-5])

/////multiple pointers////

function countUniquePointers(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

countUniquePointers([0,1,1,2,2,3,4,5])