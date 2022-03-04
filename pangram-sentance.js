function isPangram(str) {
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let variable of str.toLowerCase()) {
        alphabet.delete(variable); 
        if(alphabet.size === 0) {
            return true;
        }
    }
    return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//time complexity: O(1) because alphabet cant exceed more than 26 letters
//space complexity: O(n)