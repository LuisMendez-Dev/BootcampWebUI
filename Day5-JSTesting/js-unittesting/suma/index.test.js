const sum = require("./index.js");

/*test("Add numbers", function() {
  //ARRANGE
  const a = 1;
  const b = 2;

  //ACT
  const result = sum(a, b);

  //ARRANGE
  expect(result).toEqual(3);
});*/


describe('Sum Function test suite', () => {
  it('when I sent 2 numbers returned the sum of them', () => {

    //ARRANGE
    const a = 1;
    const b = 2;

    //ACT
    const result = sum(a, b);

    //ARRANGE
    expect(result).toEqual(3);
  })
  it('should return null when I null annd null', () => {


    //ARRANGE
    const a = null;
    const b = null;

    //ACT
    const result = sum(a, b);

    //ARRANGE
    expect(result).toBe(0);
  })
  it('should return string concatened when I sent number and string', () => {


    //ARRANGE
    const a = 'null';
    const b = 1;

    //ACT
    const result = sum(a, b);

    //ARRANGE
    expect(result).toBe('null1');
  })
})
