const db = require("../data/dbConfig.js");
const server = require("./server.js");
const request = require("supertest");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("users").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("2 test per endpoint: /api/jokes, /api/auth/login, /api/auth/register", () => {
  //
  describe("2 tests for /api/jokes", () => {
    let res;
    beforeAll(async () => {
      res = await request(server).get("/api/jokes");
    });
    test("returns 401", () => {
      expect(res.status).toBe(401); // NOTE: should be 401 as we are not passing a token
    });
    test("body returns 'token required' ", () => {
      expect(res.body).toEqual({ message: "token required" });
    });
  });
  //
  //
  describe('2 tests for api/auth/login', () => {
    
  })
});
