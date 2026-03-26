let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let c = parseFloat(prompt("Enter third number:"));

let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log("Largest number is:", largest);