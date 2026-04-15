const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
}

module.exports = connectDB;