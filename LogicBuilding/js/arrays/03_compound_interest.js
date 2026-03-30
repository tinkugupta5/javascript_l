
const P = 1200;
const R = 5.4;
const T = 2;

const A = P * Math.pow(1 + R / 100, T);
const CI = A - P;

console.log("Compound interest:", CI);
