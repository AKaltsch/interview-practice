// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// function productOfArray(array) {
    
//     let total = 1
    
//     function helper(arr) {
//         if (arr.length === 0) {
//             return;
//         }
//         total = total * arr[0]
//         helper(arr.slice(1))
//     }
//     helper(array)
//     return total
// }

////recursive///////

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1))
}