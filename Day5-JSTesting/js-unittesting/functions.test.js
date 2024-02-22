const functions = require("./functions.js");

describe("multiply function", () => {
  it("should be return multiple when I sent two numbers", () => {
    //ARRANGE
    const firstNumber = 2;
    const secondNumber = 3;
    const expectedResult = 6;

    //ACT
    const result = functions.multiply(firstNumber, secondNumber);

    //ASSERT
    expect(result).toBe(expectedResult);
  });

  it("should return the product when multiplying two decimal numbers", () => {
    //ARRANGE
    const firstNumber = 3.14;
    const secondNumber = 2.71;
    const expectedResult = 8.5094;
    const resultPrecision = 4;

    //ACT
    const result = functions.multiply(firstNumber, secondNumber);

    //ASSERT
    expect(result).toBeCloseTo(expectedResult, resultPrecision);
  });

  it("should return NaN when multiplying a string and a number", () => {
    //ARRANGE
    const firstElement = "Bootcamp Web UI";
    const secondElement = 2024;

    //ACT
    const result = functions.multiply(firstElement, secondElement);

    //ASSERT
    expect(result).toBeNaN();
  });

  it("should return 0 when multiplying a number by 0", () => {
    //ARRANGE
    const firstElement = 0;
    const secondElement = 2024;
    const expectedResult = 0;

    //ACT
    const result = functions.multiply(firstElement, secondElement);

    //ASSERT
    expect(result).toBe(expectedResult);
  });
});

describe("isNull function", () => {
  it("should be return null", () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).toBeNull();
  });

  it("should return not undefined", () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).not.toBeUndefined();
  });

  it("should return true if the function returns a falsy value", () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).toBeFalsy();
  });

  it("should return false if the function returns a truthy value", () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).not.toBeTruthy();
  });

  it("should return null if a parameter is passed", () => {
    //ARRANGE
    const value = 2024;

    //ACT
    const result = functions.isNull(value);

    //ASSERT
    expect(result).toBeNull();
  });
});

describe("checkTruthy function", () => {
  it("should be return true when I sent true", () => {
    //ARRANGE
    const value = true;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBeTruthy();
  });

  test("should return false for truthy values that are not strictly true", () => {
    //ARRANGE
    const truthyValues = [
      1,
      "true",
      [],
      {},
      function () {},
      new Date(),
      -2024,
      3.1415,
    ];

    //ACT & ASSERT
    truthyValues.forEach((value) => {
      expect(functions.checkTruthy(value)).toBe(false);
    });
  });

  it("should return false when i sent undefined", () => {
    //ARRANGE
    const value = undefined;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBeFalsy();
  });

  it("should return false when i send a non empty string", () => {
    //ARRANGE
    const value = "Hello World";

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBe(false);
  });
});

describe("addLastName function", () => {
  it("should be return Pepito Perez when I sent Perez", () => {
    // ARRANGE
    const lastname = "Perez";
    const expected = { firstname: "Pepito", lastname: "Perez" };

    // ACT
    const result = functions.addLastName(lastname);

    // ASSERT
    expect(result).toEqual(expected);
  });

  it("should return an object with the firstname property", () => {
    //ARRANGE
    const lastName = "Perez";

    //ACT
    const result = functions.addLastName(lastName);

    //ASSERT
    expect(result).toHaveProperty("firstname");
  });

  it("should return an object with null or empty lastname", () => {
    // ARRANGE
    const emptyLastName = "";
    const nullLastName = null;

    // ACT
    const resultEmpty = functions.addLastName(emptyLastName);
    const resultNull = functions.addLastName(nullLastName);

    // ASSERT
    expect(resultEmpty).toEqual({
      firstname: "Pepito",
      lastname: emptyLastName,
    });
    expect(resultNull).toEqual({
      firstname: "Pepito",
      lastname: nullLastName,
    });
  });

  it("should return an object that adds a very long lastname to the lastname property", () => {
    // ARRANGE
    const veryLongLastName = "a".repeat(20);

    // ACT
    const result = functions.addLastName(veryLongLastName);

    // ASSERT
    expect(result).toEqual({
      firstname: "Pepito",
      lastname: veryLongLastName,
    });
  });
});
