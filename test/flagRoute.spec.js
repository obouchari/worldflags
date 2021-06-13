const request = require("supertest");
const app = require("../app");

it("return 200 OK when param is a valid country abbr", () => {
  request(app).get("/:id").query({ id: 23 }).expect(200);
});
