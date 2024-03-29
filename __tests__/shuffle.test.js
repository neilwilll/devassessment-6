const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const result = shuffle([])
    expect(Array.isArray(result)).toBe(true)
  }) 

  test("check that all the same items are in the array", () => {
    const result = shuffle([1,2,3])
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
  }) 
  test("returns an array of the same length",() => {
    const result = shuffle([1,2,3,4,5]);
    expect(result.length).toBe(2)
  })  
});

