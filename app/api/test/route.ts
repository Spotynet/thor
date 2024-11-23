// /pages/api/users/route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/db_connection";

// Handle GET requests
export async function GET() {
  try {
    const users = await query("SELECT * FROM users"); // Replace 'users' with your table
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body; // Replace with your expected fields
    const result = await query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
