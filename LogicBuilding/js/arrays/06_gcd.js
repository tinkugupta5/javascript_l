// Program to find the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


let num1 = 48;
let num2 = 18;
console.log(`GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);

num1 = 100;
num2 = 75;
console.log(`GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);