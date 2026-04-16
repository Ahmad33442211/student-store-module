require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const connectDB = require("../db");

const studentEmail = "ahmadabukhater95@outlook.com";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /api/products", () => {
  test("getAll to show all product", async () => {
    const res = await request(app).get("/api/products");

    const passed = res.statusCode === 200 && Array.isArray(res.body);

    console.log(
      `${studentEmail} - getAll to show all product - ${res.statusCode} - ${passed ? "PASSED" : "FAILED"}`
    );

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});