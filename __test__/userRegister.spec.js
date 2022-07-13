const request = require("supertest");
const app = require("../app");

it("returns 200 Ok when signup page is valid", (done) => {
  request(app)
    .post("/api/1/users")
    .send({
      username: "user1",
      email: "user1@gmail.com",
      password: "1234",
    })
    .expect(200, done);
});
