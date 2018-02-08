function firstPrimes(number) {
  if (number < 11) {
    return [];
  }
  for (var i = number; number > 10; number--) {
    if (isPrime(number)) {
      return number;
    }
  }
}

function isPrime(number) {
  if (number < 2) {
    return true;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
