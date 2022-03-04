function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j=0; j < arr.length; j++ ) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumZero([1, 2, 3, 5, -2]));

// time complexity : O(n^2)
//space complexity : O(n)