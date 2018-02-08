function firstPrime(number) {
  if (number < 11) {
    return [];
  }
  if (number % number === 0 && number % 1 === 0) {
    return number;
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
