import { pool } from "./database";

async function testDatabase() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("Database connected successfully");
    console.log(result.rows);
  } catch (error) {
    console.error("Database connection failed:");
    console.error(error);
  } finally {
    await pool.end();
  }
}

testDatabase();
