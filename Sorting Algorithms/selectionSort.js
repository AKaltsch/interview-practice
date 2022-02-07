// function selectionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         if (i !== min) {
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }

// selectionSort([1,23,5,234,76,34,57])


/////////////es2015 syntax

function selectionSort(arr) {
    const swap = (arr, index1, index2) => 
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])

    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) swap(arr, i, lowest)
    }
    return arr
}

selectionSort([1,23,5,234,76,34,57])