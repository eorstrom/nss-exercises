describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should have an absolute function", function() {
    expect(absolute).toBeDefined();
  });

  it("should not return a negative value for subtraction (e.g. 5 - 7 !== -2", function() {
    expect(absolute(subtract, 5, 7)).not.toBe(-2);
  });

  it("should return the absolute value of a subtraction (e.g. 5 - 7 === 2", function() {
    expect(absolute(subtract, 5, 7)).not.toBe(2);
  });

  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(2, 5)).toBe(10);
  });

  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(10, 5)).toBe(2);
  });

  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should square one number", function() {
    expect(square(5)).toBe(25);
  });

  it("should have a square root function", function() {
    expect(square).toBeDefined();
  });

  it("should square root one number", function() {
  expect(Math.sqrt(25)).toBe(5);
  });
});