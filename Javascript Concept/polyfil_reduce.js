Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Example usage:
const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

const product = nums.myReduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 120