const {
  capitalizeWords,
  filterActiveUsers,
  logAction
} = require("./index");

describe("capitalizeWords()", () => {
  test("capitalizes every word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("handles a single word", () => {
    expect(capitalizeWords("javascript")).toBe("Javascript");
  });

  test("returns an empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("does not change an already capitalized string", () => {
    expect(capitalizeWords("Hello World")).toBe("Hello World");
  });
});

describe("filterActiveUsers()", () => {
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

  test("returns an empty array when no users are active", () => {
    const users = [
      { name: "Bob", isActive: false },
      { name: "Jane", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([]);
  });

  test("returns an empty array for an empty input", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

