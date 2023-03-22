const { isLoggedIn, isNotLoggedIn } = require("./");

describe("isLoggedIn", () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();

  test("로그인되어 있으면 next()", () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  test("로그인되어 있지 않으면 ", () => {});
});

describe("isNotLoggedIn", () => {
  test("로그인되어 있으면 isNot", () => {});
  test("로그인되어 있지 않으면 next()", () => {});
});
