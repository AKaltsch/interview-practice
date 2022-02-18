function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var selected = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > selected; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = selected
        console.log(arr)
    }
    return arr
}

console.log(insertionSort([1,34,25,133,76,3,7]))