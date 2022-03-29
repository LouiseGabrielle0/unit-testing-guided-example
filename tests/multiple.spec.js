const { multiply } = require('./../calculator.js');

describe('Multiply', () => {   
test("Function is called with two positive integers", () => {
    const result = multiply(2, 2); 
    expect(result).toBe(4); 
  });


test("The value returned should bethe result of the multiplication of both values", () => {
    const result = multiply(4, 4);
    expect(result).toBe(16); 
  });


test("Function is called with a negative and a positive integer. The value returned should be a negative number", () => {
    const result = multiply(5, -5); 
    expect(result).toBe(-25); 
  });


test("Function is called with any number and a number `0`. The value returned should be `0`", () => {
    const result = multiply(26, 0); 
    expect(result).toBe(0); 
  });

});