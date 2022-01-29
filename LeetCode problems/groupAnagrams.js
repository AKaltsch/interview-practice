var groupAnagrams = function(strs) {
    let table = {}
    
    for (string of strs) {
        let letters = string.split("").sort().join("")
        if (!table[letters]) {
            table[letters] = [string]
        } else {
            table[letters].push(string)
        }
    }
    let answer = Object.values(table)
    return answer
};


// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]