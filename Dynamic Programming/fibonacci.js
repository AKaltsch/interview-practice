// function fibonacci(num) {

//     ////iteraton solution
//     // let arr = []
//     // arr[0] = 1
//     // arr[1] = 1

//     // for (let i = 2; i < num; i++) {
//     //     arr[i] = arr[i - 1] + arr[i - 2]
//     // }

//     // return arr[num - 1]

//     ////recursive solution
//     // ////// O(2^n) time complexity -> VERY VERY SLOW!!!!
//     // if (num <= 2) return 1;
//     // return fibonacci(num - 1) + fibonacci(num - 2)

// }

// console.log(fibonacci(8))

//MEMOIZATION -> DYNAMIC PROGRAMMING

// function fibonacci(num, memo = []) {
//     if (memo[num] !== undefined) return memo[num];
//     if (num < 2) return 1;

//     let result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
//     memo[num] = result

//     return result;
// }

// TABULATION -> DYNAMIC PROGRAMMING

function fibonacci(num) {
    if (num <= 2) return 1;
    let fibNums = [undefined, 1, 1];

    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    
    return fibNums[num]
}

console.log(fibonacci(7))
