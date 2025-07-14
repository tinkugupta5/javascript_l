// Finds the sum of all numbers in an array without using built-in methods
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: