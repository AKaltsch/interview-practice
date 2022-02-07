function averagePair(arr, target){
    if (arr.length < 1) return false
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let avg = (arr[start] + arr[end])/2
        if (avg === target) {
            return true
        } else {
            start++
        }
    }
    return false
  }
  
  averagePair([1,2,3], 2.5)