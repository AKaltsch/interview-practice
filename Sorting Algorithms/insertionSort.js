function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let selected = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > selected; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = selected
    }
    return arr
}

insertionSort([1,34,25,133,76,3,7])