# First Primes

This is a kata from https://www.codewars.com/kata/588ba8c4181ba7fe97000045/train/javascript

Find some first primes to K (K included if it is prime) with two digits. ( If no such numbers - return empty array ). When you find it, you must find number from them, that is maximal after division of its digits.

### Examples

```
  firstPrimes(50) // 41
  firstPrimes(1) // []
```

I did not understand what "When you find it, you must find number from them, that is maximal after division of its digits." meant even after looking at solutions.

My solution currently finds the biggest prime number closest to the number chosen, or if its a single digit returns an empty array.
