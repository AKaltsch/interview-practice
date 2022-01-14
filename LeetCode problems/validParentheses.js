// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        console.log(char)
        if (char === "[") {
            stack.push("]");
        } else if (char === "{") {
            stack.push("}");
        } else if (char === "(") {
            stack.push(")");
        } else if (stack.pop() !== char) {
            return false
        }
    }
    console.log("returning")
    console.log(stack.length)
    return stack.length === 0;
};

// Input: s = "()[]{}"
// Output: true
