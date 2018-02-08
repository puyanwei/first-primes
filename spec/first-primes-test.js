describe("#firstPrime", function() {
  it("integar should return an empty array", function() {
    expect(firstPrime(0)).toEqual([]);
  });
  it("integar return an empty array", function() {
    expect(firstPrime(10)).toEqual([]);
  });
  it("integar should return 11", function() {
    expect(firstPrime(11)).toEqual(11);
  });
  it("integar should return 13", function() {
    expect(firstPrime(13)).toEqual(13);
  });
});

describe("#isPrime", function() {
  it("integar should return true because it is a prime number", function() {
    expect(isPrime(1)).toBe(true);
  });
  it("integar should return true because it is a prime number", function() {
    expect(isPrime(2)).toBe(true);
  });
  it("integar should return false because it is not a prime number", function() {
    expect(isPrime(3)).toBe(false);
  });
});

// firstPrimes(50) // 41
// firstPrimes(1) // []
