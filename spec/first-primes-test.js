describe("#firstPrime", function() {
  it("0 should return an empty array", function() {
    expect(firstPrime(0)).toEqual([]);
  });
  it("10 should return an empty array", function() {
    expect(firstPrime(10)).toEqual([]);
  });
  it("11 should return 11", function() {
    expect(firstPrime(11)).toEqual(11);
  });
  it("13 should return 13", function() {
    expect(firstPrime(13)).toEqual(13);
  });
});

```
  firstPrimes(50) // 41
  firstPrimes(1) // []
```;
