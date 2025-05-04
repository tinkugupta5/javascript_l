function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function getNextPrimes(start, count) {
    const primes = [];
    let num = start;
  
    while (primes.length < count) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }
  

  const startFrom = 13;
  const result = getNextPrimes(startFrom,5);
  console.log(result); // Output: [13, 17, 19, 23, 29]