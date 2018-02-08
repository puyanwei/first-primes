function firstPrime(number) {
  if (number <= 10) {
    return [];
  }
  if (number % number === 0 && number % 1 === 0) {
    return number;
  }
}

function isPrime(number) {
  if (number < 3) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  if (number % 3 === 0) {
    return false;
  }
  if (number % 4 === 0) {
    return false;
  }
  return true;
}

// if (number < 2) {
//   return false;
// } else if ((number = 2)) {
//   return true;
// }
// for (var i = 2; i < number; i++) {
//   if (number % i === 0) {
//     return false;
//   } else if (i === number - 1) {
//     return true;
//   }
// }
