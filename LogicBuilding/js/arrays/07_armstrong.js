
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Example usage
let number = 153;
console.log(`${number} is an Armstrong number: ${isArmstrong(number)}`);

// Test with another number
number = 9474;
console.log(`${number} is an Armstrong number: ${isArmstrong(number)}`);

// Test with a non-Armstrong number
number = 123;
console.log(`${number} is an Armstrong number: ${isArmstrong(number)}`);