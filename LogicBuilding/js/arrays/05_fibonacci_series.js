const n = 10; 

let fibSeries = [0, 1];

for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
}

console.log(`First ${n} Fibonacci numbers:`);
console.log(fibSeries.slice(0, n));
