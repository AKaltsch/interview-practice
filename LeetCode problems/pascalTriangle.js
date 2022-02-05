var generate = function(numRows, answer=[]) {
    
    for (let i = 0; i < numRows; i++) {
        answer[i] = []
        answer[i][0] = 1
        answer[i][i] = 1
        for (let j = 1; j < i; j++) {
            answer[i][j] = answer[i-1][j-1] + answer[i-1][j]
        }    
    } 
    return answer
};