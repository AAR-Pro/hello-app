const request = require("supertest");
const app = require("../index"); // the exported Express app

test("GET /hello returns a JSON greeting", async () => {
  const res = await request(app).get("/hello");

  expect(res.status).toBe(200);
  expect(res.body).toEqual({ message: "Hello from the backend!" });
});