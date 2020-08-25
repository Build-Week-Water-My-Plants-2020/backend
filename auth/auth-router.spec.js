const request = require('supertest');
const server = require('../server.js');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
})

describe('users', () => {
  // Register Tests
  it('Register should return 201', async () => {
    const res = await request(server)
          .post('/api/auth/register')
          .send({ username: "Desi", password: "password", phoneNumber: "2525551234" });
    expect(res.status).toBe(201);
  });

  it("Login should return 200 & application/json", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Desi", password: "password",  phoneNumber: "2525551234" });
    expect(res.type).toBe("application/json");

    // Login Tests
    const res1 = await request(server)
      .post('/api/auth/login')
      .send({ username: "Desi", password: "password" });
    expect(res1.status).toBe(200);

    const res2 = await request(server)
      .post("/api/auth/login")
      .send({ username: "Desi", password: "password" });
    expect(res2.type).toBe("application/json");
  });
});