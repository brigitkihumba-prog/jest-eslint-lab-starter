// Import the functions from index.js for testing.
const {
  capitalizeWords,
  filterActiveUsers,
  logAction
} = require("./index");

// Tests for the capitalizeWords function.
describe("capitalizeWords()", () => {

  // Check that every word starts with a capital letter.
  test("capitalizes every word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  // Check that a single word is capitalized correctly.
  test("handles a single word", () => {
    expect(capitalizeWords("javascript")).toBe("Javascript");
  });

  // Check that an empty string returns an empty string.
  test("returns an empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  // Ensure already-capitalized text remains unchanged.
  test("does not change an already capitalized string", () => {
    expect(capitalizeWords("Hello World")).toBe("Hello World");
  });
});

// Tests for the filterActiveUsers function.
describe("filterActiveUsers()", () => {

  // Check that only active users are returned.
  test("returns only active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
      { name: "John", isActive: true }
    ];

    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true },
      { name: "John", isActive: true }
    ]);
  });

  // Check that an empty array is returned when no users are active.
  test("returns an empty array when no users are active", () => {
    const users = [
      { name: "Bob", isActive: false },
      { name: "Jane", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([]);
  });

  // Check that the function handles an empty array correctly.
  test("returns an empty array for an empty input", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});