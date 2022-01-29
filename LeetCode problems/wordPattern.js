var wordPattern = function(pattern, s) {
    let table = {}
    let words = s.split(" ")
    let answer = []
    
    if (pattern.length !== words.length) return false
    
    for (let i = 0; i < pattern.length; i++) {
        if (!table[pattern[i]]) {
            if (Object.values(table).includes(words[i])) {
                return false;
            } else {
                table[pattern[i]] = words[i]
            }          
        } else {
            continue
        }
    }
    
    for (let j = 0; j < pattern.length; j++) {
        if (table[pattern[j]]) answer.push(table[pattern[j]])
    }
    
    answer = answer.join(" ")
    if (answer == s) {
        return true
    } else {
        return false
    }
    
};


// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false