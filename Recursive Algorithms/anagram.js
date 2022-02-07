function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } 
    for (let i=0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
        return true;
    }

//////////////////////////
//Big O efficient

function sameO(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const freqCounter1 = {}
    const freqCounter2 = {}
    for (val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) +1
    }
    for (key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    console.log(freqCounter1)
    console.log(freqCounter2)
    return true
}

// sameO([1,2,3,4,2], [1,9,4,16,4])

// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const freqCounter1 = {}
//     const freqCounter2 = {}
//     for (char of str1) {
//         freqCounter1[char] = (freqCounter1[char] || 0) + 1
//     }
//     for (char of str2) {
//         freqCounter2[char] = (freqCounter2[char] || 0) + 1
//     }
//     for (key in freqCounter1) {
//         if (!(key ** 2 in freqCounter2)) {
//             return false
//         }
//         if (freqCounter2[key ** 2] !== freqCounter1[key]) {
//             return false
//         }
//     }
//     console.log(freqCounter1)
//     console.log(freqCounter2)
//     return true
// }

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = {}
    for (letter of str1) {
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)
    for (letter of str2) {
        if (!(lookup[letter])) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    console.log(lookup)
    return true;

}

anagram("car", "rac")

