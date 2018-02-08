describe("#firstPrime", function() {
  it("integar 0 should return an empty array", function() {
    expect(firstPrime(0)).toEqual([]);
  });
  it("integar 10 return an empty array", function() {
    expect(firstPrime(10)).toEqual([]);
  });
  it("integar 11 should return 11", function() {
    expect(firstPrime(11)).toEqual(11);
  });
  it("integar 13 should return 13", function() {
    expect(firstPrime(13)).toEqual(13);
  });
});

describe("#isPrime", function() {
  it("integar 1 should return true because it is a prime number", function() {
    expect(isPrime(1)).toBe(true);
  });
  it("integar 2 should return true because it is a prime number", function() {
    expect(isPrime(2)).toBe(true);
  });
  it("integar 3 should return false because it is not a prime number", function() {
    expect(isPrime(3)).toBe(false);
  });
  it("integar 4 should return true because it is a prime number", function() {
    expect(isPrime(4)).toBe(false);
  });
  it("integar 5 should return true because it is a prime number", function() {
    expect(isPrime(5)).toBe(true);
  });
});

// firstPrimes(50) // 41
// firstPrimes(1) // []
