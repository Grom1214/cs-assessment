function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars('moonday'))
//time complexity: O(n^2)
//space complexity: O(n)