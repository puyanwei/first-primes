function firstPrime(number) {
  if (number <= 10) {
    return [];
  }
  if (number % number === 0 && number % 1 === 0) {
    return number;
  }
}
