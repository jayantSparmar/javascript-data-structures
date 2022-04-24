function primeFactors(num) {
    const primes = [];
    for (let factor = 2; factor <= num; factor++) {
      while ((num % factor) === 0) {
        primes.push(factor);
        num /= factor;
      }
    }
    return primes;
  } 
  console.log("Prime factors are: ",primeFactors(30));